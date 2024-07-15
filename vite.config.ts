import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from "path";
import fs from 'fs';
import dayjs from 'dayjs'

import AutoImport from 'unplugin-auto-import/vite'
import monacoEditorPluginModule from 'vite-plugin-monaco-editor'

const isObjectWithDefaultFunction = (module: unknown): module is { default: typeof monacoEditorPluginModule } => (
  module != null &&
  typeof module === 'object' &&
  'default' in module &&
  typeof module.default === 'function'
)
const monacoEditorPlugin = isObjectWithDefaultFunction(monacoEditorPluginModule)
  ? monacoEditorPluginModule.default
  : monacoEditorPluginModule

const INVALID_CHAR_REGEX = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g;
const DRIVE_LETTER_REGEX = /^[a-z]:/i;

const timestamp = dayjs(new Date()).format('YYYY-MM-DD_HH.mm.ss')

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 加载环境变量
  let env = loadEnv(mode, process.cwd())
  console.log('env - ' + mode, env)

  return {
    plugins: [
      vue(),

      // 自动导入
      AutoImport({
        imports: [ 'vue', 'vue-router', 'pinia' ],
      }),

      // Monaco Editor 配置
      monacoEditorPlugin({
        languageWorkers: ['editorWorkerService', 'typescript', 'json', 'html']
      }),

      // 自定义插件
      {
        name: 'copy-gitignore',
        writeBundle() {
          // 如果是部署到 github，则覆盖 .gitignore，删除掉里面的 dist 目录
          if (process.argv.includes('--deploy')) {
            const src = path.resolve(__dirname, '.bak/.gitignore');
            const dest = path.resolve(__dirname, '.gitignore');
            fs.copyFile(src, dest, () => {})
          }
        }
      }
    ],

    // 配置别名 @
    resolve: {
      alias: {
        '@': path.resolve('./src')
      }
    },

    // 项目的 base
    base: env.VITE_BASE_PATH === '/' ? './' : env.VITE_BASE_PATH,

    // LESS
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },

    // 打包
    build: {
      rollupOptions: {
        // 打包时，将多个入口，分开打包
        input: {
          main: resolve(__dirname, 'index.html'),
          login: resolve(__dirname, 'login.html')
        },
        
        output: {
          // 问题 1：由于浏览器的缓存机制，每次部署后，都要强制刷新
          // 解决方法：给文件添加时间戳，每次部署后，都是新文件，需要重新下载
          entryFileNames: `assets/[name].[hash].${timestamp}.js`,
          chunkFileNames: `assets/[name].[hash].${timestamp}.js`,
          assetFileNames: `assets/[name].[hash].${timestamp}.[ext]`,


          // 问题 2：部署到github后，_plugin-vue_export-helper.js 访问不到
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : "";
            // A `:` is only allowed as part of a windows drive letter (ex: C:\foo)
            // Otherwise, avoid them because they can refer to NTFS alternate data streams.
            return (
              driveLetter +
              name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "")
            );
          },
        },
      }
    },
    
    server: {
      port: 8091, // 端口号

      // 配置代理
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:8090',  // 接口地址
          changeOrigin: true,               // 是否跨域
        },
      }
    }
  }
})

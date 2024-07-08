import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path, { resolve } from "path";
import fs from 'fs';

import AutoImport from 'unplugin-auto-import/vite'

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
    base: env.VITE_BASE_PATH,  

    // LESS
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },

    // 打包时，将多个入口，分开打包
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          login: resolve(__dirname, 'login.html')
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

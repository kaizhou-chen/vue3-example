import qs from 'qs';
import axios from 'axios';
import http from '@/utils/http'; // 导入http中创建的axios实例
import { download } from '@/utils/httpUtil';
import { serviceConfig } from './serviceConfig'

const { api } = serviceConfig;
const CancelToken = axios.CancelToken;

export function listMarketing(data) {
  return http.post(`${api}/marketing/list`, JSON.stringify(data));
}

export function createMarketing(data) {
  return http.post(`${api}/marketing/create`, JSON.stringify(data));
}

export function updateMarketing(data) {
  return http.post(`${api}/marketing/update`, JSON.stringify(data));
}

export function removeMarketing(data) {
  return http.post(`${api}/marketing/remove`, JSON.stringify(data));
}


export function listFiles(data?) {
  return http.post(`${api}/marketing/files`, JSON.stringify(data));
}

export function removeFile(data) {
  // 如果是 POST 请求，并且 Content-Type 为 application/x-www-form-urlencoded
  // 后端接口 需要通过 getParameter 来获取参数

  // 则，使用 qs 来把数据转换成url参数的形式
  return http.post(`${api}/marketing/removeFile`, qs.stringify(data), {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  });
}

/**
 * 文件上传
 * 1) Content-Type 设置为 multipart/form-data
 * 2) 参数类型为 FormData
 */
export function uploadFile(data: FormData) {
  return http.post(`${api}/marketing/upload`, data, {
    headers: {'Content-Type': 'multipart/form-data'}
  });
}

/**
 * 文件上传，并获取上传进度
 * 1) 请求头 Content-Type 设置为 multipart/form-data
 * 2) onUploadProgress 获取上传进度，传给回调函数 getLoaded
 */
export function uploadBigFile(
  formData: FormData, 
  getLoaded: (loaded: number) => void, 
  getCancelToken?: (cancel) => void
) {
  return http.post(`${api}/marketing/big-file/upload`, formData, {
    headers: {'Content-Type': 'multipart/form-data'}, // 注意 Content-Type
    onUploadProgress: (event) => {
      /** event.loaded 已上传大小 */
      if (event.lengthComputable) {
        getLoaded(event.loaded)
      }
    },
    cancelToken: new CancelToken((cancel) => {
      if (getCancelToken) {
        getCancelToken(cancel)
      }
    })
  })
}

/**
 * 文件下载
 * 1) 响应类型 responseType: 'blob'
 * 3) onDownloadProgress 获取下载进度，传给回调函数 getProgress
 */
export function downloadFile(filename, getProgress?: (loaded: number, total) => void) {
  return http.get(`${api}/marketing/big-file/download/${filename}`, {
    responseType: 'blob',
    onDownloadProgress: (event) => {
      /** event.loaded 已下载大小 */
      if (event.lengthComputable && getProgress) {
        getProgress(event.loaded, event.total)
      }
    },
  }).then((response) => {
    // 下载完毕
    if (getProgress) {
      setTimeout(() => {
        getProgress(100, 100)
      }, 500)
    }

    download(response.data, filename)
  })
}
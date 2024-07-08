import { uploadBigFile } from '@/api/marketingApi'

export const useStep4 = () => {
  const fileInfo = ref({
    filename: '',
    fileSize: 0,
    loaded: 0, // 文件已上传的大小，不分切片
  })

  const chunkSize = 5 * 1024 * 1024; // 以5MB为一个分片 

  function uploadFile(file: File) {
    fileInfo.value = {
      filename: file.name,
      fileSize: file.size,
      loaded: 0
    }

    const list = createFileChunk(file)
    for (const item of list) {
      uploadChunk(item, list.length)
    }
  }

  function createFileChunk(file: File) {
    // 切片数组
    const fileChunkList: any[] = []; 
    let cur = 0;
    while (cur < file.size) {
      fileChunkList.push({ 
        chunk: file.slice(cur, cur + chunkSize) 
      });
      cur += chunkSize;
    }

    // 切片信息
    const list = fileChunkList.map(({ chunk }, index) => ({
      filename: file.name,
      chunk,
      index,
    }))

    return list;
  }

  function uploadChunk(item, total) {
    const { chunk, filename, index } = item
    const formData = new FormData();
    formData.append("filename", filename);  // 文件名
    formData.append("chunk", chunk);  // 切片
    formData.append("index", index);  // 切片的下标
    formData.append("total", total);  // 文件共多少个切片

    uploadBigFile(formData, (loaded) => {
      // 文件已上传的大小，不分切片
      fileInfo.value.loaded += loaded
    })
  }

  return { fileInfo, uploadFile }
}
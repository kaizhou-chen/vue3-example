
export function formatData(form) {
  // 复制 form 的数据之后，再进行修改，以免影响原始表单
  let data = JSON.parse(JSON.stringify(form));
  data.type = data.type.join(',');
  return data;
}

export function parseData(data) {
  const result: any = {};
  Object.assign(result, data);

  if(data?.type != null) {
    result.type = data?.type.split(',').map(Number)
  } else {
    result.type = [];
  }

  if(data?.jit != null) {
    result.jit = Number(data?.jit);
  } else {
    result.jit = 0;
  }

  return result;
}


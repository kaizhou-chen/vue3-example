let list: any[] = [
  {
    "id": 1,
    "name": "五一促销活动",
    "region": "shanghai",
    "beginDate": "2024-05-01",
    "endDate": "2024-05-03",
    "jit": 1,
    "type": "2,3",
    "resource": 2,
    "desc": "活动 1"
  },
  {
    "id": 2,
    "name": "周末促销活动",
    "region": "beijing",
    "beginDate": "2024-05-04",
    "endDate": "2024-05-05",
    "jit": 0,
    "type": "2",
    "resource": 1,
    "desc": "活动 2"
  },
];

/**
 * 用本地数据模拟服务
 */
export function listMarketing(data) {
  return new Promise((resolve) => {
    let { pageSize, pageNumber, orderBy } = data
    pageSize = pageSize || 10;
    pageNumber = pageNumber || 1;
  
    let result = []
    let pageData = []
    let base = [...list];
    if (orderBy) {
      const [field, type] = orderBy.split(',')
      base = sortBy(base, field, type)
    }
    result = queryInArray(base, data)
    pageData = paginate(result, pageSize, pageNumber)

    resolve({
      status: 200,
      data: {
        list: pageData,
        pageInfo: {
          total: result.length,
          pageSize: pageSize,
          pageNumber: pageNumber
        },
      }
    })
  })
}

export function createMarketing(data) {
  return new Promise((resolve) => {
    data.id = (new Date()).getTime();
    list.push(data)

    resolve({
      status: 200,
      data: {
        success: true
      }
    });
  })
}

export function updateMarketing(data) {
  return new Promise((resolve) => {
    const idx = list.findIndex(x => x.id === data.id)
    if (idx > -1) {
      list[idx] = data
    }

    resolve({
      status: 200,
      data: {
        success: true
      }
    });
  })
}

export function removeMarketing(data) {
  return new Promise((resolve) => {
    // 需要边循环，边删除，可以从后往前倒序循环，来避免下标出错
    for (let i = list.length - 1; i >= 0; i--) {
      const index = list.findIndex(x => {
        return data.some(id => x.id === id)
      })

      if (index > -1) {
        list.splice(index, 1);
      }
    }

    resolve({
      status: 200,
      data: {
        success: true
      }
    });
  })
}

/**
 * 工具方法
 */
function paginate(array, pageSize, pageNumber) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

function sortBy(array, field, type) {
  return array.sort((a, b) => {
    const pair = (type === 'asc') ? [a, b] : [b, a] // 按正序或倒序，取出要比较的值
    const [x, y] = pair.map(obj => obj[field])

    let result = x - y            // 比较数字
    if (Number.isNaN(result)) {
      result = x.localeCompare(y) // 比较字符串
    }
    
    return result
  })
}

function queryInArray(base, body) {
  let { name, beginDate, endDate, jit, region } = body
  if (name) {
    base = base.filter(x => x.name.indexOf(name) > -1)
  }

  // 范围
  if (beginDate) {
    base = base.filter(x => x.beginDate.localeCompare(beginDate) >= 0)
  }
  if (endDate) {
    base = base.filter(x => x.endDate.localeCompare(endDate) <= 0)
  }

  // 多选
  if (region) {
    base = base.filter(x => matchAny(region, x.region))
  }
  if (jit) {
    base = base.filter(x => matchAny(jit, x.jit))
  }

  return base
}

function matchAny(array, value) {
  if (!array || array.length === 0) {
    return true
  }

  return array.some(x => x == value)
}
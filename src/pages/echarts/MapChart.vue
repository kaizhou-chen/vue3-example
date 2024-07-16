<template>
  <el-card shadow="hover" v-loading="loading">
    <Chart :option="option" :registerMap="registerMap" style="height: 600px;"></Chart>
  </el-card>
</template>

<script setup lang="ts">
import Chart from './chart/Chart.vue';
import nameMap from './chart/nameMap'

const option = ref();

const loading = ref(true)

onMounted(() => {
  const data = getRandomData(nameMap);
  option.value = getOption(data);

  nextTick(() => {
    loading.value = false;
  })
})

async function registerMap(echarts) {
  // 导入世界地图数据，及国家名称的中英文映射
  const url = import.meta.env.VITE_BASE_PATH + 'world.json';
  const response = await fetch(url);
  const worldData = await response.json();

  echarts.registerMap('world', (<any> worldData)); // 要注册地图
}

function getOption(data) {
  let option = {
    title: {
      text: '按国家划分的销量',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: (val) => {
        if (val.data) {
          return val.data.name + ': ' + val.data.value
        }
      }
    },
    visualMap: {
      type: 'continuous', // continuous 类型为连续型  piecewise 类型为分段型
      show: true,
      min: 0,
      max: 3000,
      realtime: false,
      calculable: true,
      inRange: {
        color: ['orangered', 'yellow', 'lightskyblue'], // 图元的颜色
        opacity: 0.7
      }
    },
    series: [
      {
        type: 'map',
        map: 'world', // 地图类型
        roam: false,      // 是否支持拖拽、缩放
        label: {
          show: false     // 是否显示对应地名
        },
        zoom: 1.2,

        nameMap: nameMap,
        data: data
      }
    ]
  };

  return option;
}

// 构建随机的数据
function getRandomData(nameMap) {
  const values = Object.values(nameMap);
  const countryList: any[] = chooseRandom(values, 150);
  if (countryList.indexOf('中国') < 1) {
    countryList.push('中国')
  }
  const list = countryList.map(x => {
    const value = (x === '中国') ? 3000 : getRandomInt(10, 2900)
    return {
      name: x,
      value: value
    }
  })

  return list;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseRandom(array, num = 1) {
  const list: any[] = [];
  for(let i = 0; i < num; i++) {
    const random = Math.floor(Math.random() * array.length);
    if(list.indexOf(array[random]) !== -1){
        continue;
    };
    list.push(array[random]);
  };
  return list;
};
</script>

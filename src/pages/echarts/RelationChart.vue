<template>
  <el-card shadow="hover">
    <Chart :option="option" style="height: 405px;"></Chart>
  </el-card>
</template>

<script setup lang="ts">
import Chart from './chart/Chart.vue'

const option = ref()

const list = [
  {
    id: "0",
    source: "平台",
    target: "结算",
    name: "判保信息"
  },
  {
    id: "1",
    source: "平台",
    target: "顺丰",
    name: "上门取件"
  },
  {
    id: "2",
    source: "平台",
    target: "云平台",
    name: "用户信息"
  },
  {
    id: "3",
    source: "iData",
    target: "平台",
    name: "区县信息"
  },
  {
    id: "4",
    source: "iData",
    target: "平台",
    name: "国家信息"
  },
  {
    id: "5",
    source: "平台",
    target: "服务供应商",
    name: "地代办信息"
  }
];

onMounted(() => {
  const nodes = getNodes(list, '平台')
  const links = getLinks(list, nodes)
  const categories = getCategories()

  option.value = getOption(nodes, links, categories)
})

function getOption(nodes, links, categories) {
  let option = {
    title: {
      text: '关系图'
    },
    series: [
      {
        name: '关系图',
        type: 'graph',
        layout: 'force',
        label: {
          show: true
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3
        },

        /** 数据 */
        data: nodes,
        links: links,
        categories: categories,          

        /** 受力图相关的属性 */
        // roam: true,
        symbolSize: 58, // 节点的半径
        force: {
          repulsion: 300, // 根据节点的数量，计算节点间的排斥力，即：节点之间的距离
          edgeLength: 140
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          normal: {
            show: true,
            textStyle: {
              fontSize: 12
            },
            formatter(x) {
              return x.data.name;
            }
          }
        },
      }
    ]
  };

  return option;
}

function getCategories() {
  return [{
    name: '根节点',
    itemStyle: {
      color: '#007FFF'
    }
  },
  {
    name: '其他节点',
    itemStyle: {
      color: '#00D9FF'
    }
  }]
}

function getNodes(list, rootNode) {
  // 取出名称（去重）
  let nameMap: any = {};
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    nameMap[item.source] = item.source;
    nameMap[item.target] = item.target;
  }

  // 封装nodes
  let nodes: any[] = [];
  for (let name in nameMap) {
    nodes.push({
      id: nodes.length,
      name: name,
      category: (name === rootNode) ? 0 : 1
    });
  }

  return nodes;
}

function getLinks(dataset, nodes) {
  // 将“应用名称”与“node下标”做映射
  let indexMap: any = {};
  for (let i = 0; i < nodes.length; i++) {
    let item = nodes[i];
    indexMap[item.name] = i;
  }

  // 取出连接点（去重）
  const links: any[] = []
  for (let i = 0; i < list.length; i++) {
    let item = list[i];
    let sourceIndex = indexMap[item.source];
    let targetIndex = indexMap[item.target];

    links.push({
      source: sourceIndex, // @todo 如果报错 node not found，则注意这里是否需要parseInt 
      target: targetIndex,
      name: item.name
    })
  }

  return links;
};
</script>

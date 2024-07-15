import { ref, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import bus from '@/utils/bus';
import { useTableStore } from './useTableStore';

export function useDialog() {
  const tableStore = useTableStore()

  const router = useRouter();

  const dgTitle = ref('')
  const dgOpen = ref(false)
  const isUpdate = ref(false)
  const dgType = ref(1)

  function gotoCreate() {
    if (dgType.value === 1) {
      // 跳转到创建页面
      router.push({ path: '/form/create' })
    } else {
      // 打开创建弹出框
      dgTitle.value = '新建活动'
      isUpdate.value = false;
      dgOpen.value = true;
    }
  }

  async function doUpdate(data) {
    const val = JSON.parse(JSON.stringify(data));

    if (dgType.value === 1) {
      // 跳转到编辑页面
      router.push({ path: '/form/update' }).then(() => {
        bus.emit('updateUser', val) // 路由不能传递对象，使用EventBus，在页面跳转后发送消息
      })
    } else {
      // 打开编辑弹出框
      dgTitle.value = '编辑活动'
      isUpdate.value = true;
      dgOpen.value = true;

      await nextTick();
      bus.emit('updateUser', val)
    }
  }

  function viewDetail(data) {
    const val = JSON.parse(JSON.stringify(data));

    router.push({ 
      name: 'basicDetail', 
      params: {
        id: data.id
      } 
    }).then(() => {
      bus.emit('viewUser', val) // 路由不能传递对象，使用EventBus，在页面跳转后发送消息
    })
  }

  function close() {
    dgOpen.value = false;
    tableStore.getTableData()
  }

  return { dgTitle, dgOpen, isUpdate, dgType, gotoCreate, doUpdate, viewDetail, close }
}
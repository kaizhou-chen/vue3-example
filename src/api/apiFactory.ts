import * as api from './marketingApi';
import * as demo from './demoApi'

const isDemo = import.meta.env.VITE_DEMO === 'true';
const factory = isDemo ? demo : api;

export function listMarketing(data): Promise<any> {
  return factory.listMarketing(data)
}

export function createMarketing(data): Promise<any> {
  return factory.createMarketing(data)
}

export function updateMarketing(data): Promise<any> {
  return factory.updateMarketing(data)
}

export function removeMarketing(data): Promise<any> {
  return factory.removeMarketing(data)
}
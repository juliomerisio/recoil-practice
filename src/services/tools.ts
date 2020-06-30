import { SerializableParam } from 'recoil';
import { client } from './client';
import { Tool } from '../components/ToolsList';

async function create(toolItemData: Omit<Tool, 'id'>) {
  return client('tools', { body: JSON.stringify(toolItemData) });
}
async function read(params: SerializableParam = '') {
  return client(`tools?${String(params)}`);
}
async function remove(toolId: string) {
  return client(`tools/${toolId}`, { method: 'DELETE' });
}
export { create, read, remove };

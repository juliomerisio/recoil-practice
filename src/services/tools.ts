import { SerializableParam } from 'recoil';
import api from './api';
import { Tool } from '../components/ToolsList';

export interface GetToolsParams {
  q?: string;
  tags?: string;
}

export const getTools = async (params?: SerializableParam) =>
  api.get<Tool[]>(`/tools?${String(params)}`);
export const deleteToolById = async (id: string) => api.delete(`/tools/${id}`);

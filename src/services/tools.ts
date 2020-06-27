import { SerializableParam } from 'recoil';
import api from './api';
import { Tool } from '../components/ToolsList';

export const getTools = async (params?: SerializableParam) =>
  api.get<Tool[]>(`/tools?${String(params)}`);
export const deleteToolById = async (title: string) =>
  api.delete(`/tools/${title}`);
export const createTool = async (data: any) => api.post(`/tools`, data);

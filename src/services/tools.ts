import api from './api';
import { Tool } from '../components/ToolsList';

export const getTools = async (q?: string) => api.get<Tool[]>(`/tools?=${q}&`);
export const deleteToolById = async (id: string) => api.delete(`/tools?=${id}`);

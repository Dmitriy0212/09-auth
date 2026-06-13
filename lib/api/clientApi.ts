import axios from 'axios';
import { type Note } from '../../types/note';
import { type NoteTag } from '../../types/note';

interface FetchNotesParams {
  page: number;
  perPage?: number;
  search?: string;
  tag?: string;
}
export type User = {
  username: string;
  email: string;
  avatar: string;
};
export type Users = {
  avatar: string;
  email: string;
  username: string;
};
interface NotesResponse {
  notes: Note[];
  totalPages: number;
}
export type CreateNoteDto = {
  title: string;
  content: string;
  tag: NoteTag;
};
interface registerRequest {
  email: string;
  password: string;
}
interface updateRequest {
  username?: string;
  email?: string;
  avatar?: string;
}

const NEXT_PUBLIC_NOTEHUB_TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: 'https://09-auth-e90vn8slz-dmitriy0212s-projects.vercel.app/api',
  withCredentials: true,
});

export const fetchNotes = async ({
  page,
  perPage,
  search,
  tag,
}: FetchNotesParams): Promise<NotesResponse> => {
  const { data } = await api.get<NotesResponse>('/notes', {
    params: {
      page,
      perPage,
      search,
      tag: tag,
    },
  });
  console.log('API Response:');
  return data;
};
export const createNote = async (note: CreateNoteDto): Promise<Note> => {
  const { data } = await api.post<Note>('/notes', note);
  return data;
};
export const deleteNote = async (id: string): Promise<Note> => {
  const { data } = await api.delete<Note>(`/notes/${id}`);
  return data;
};
export const fetchNoteById = async (id: string): Promise<Note> => {
  const { data } = await api.get<Note>(`/notes/${id}`);
  return data;
};

export const register = async (registerData: registerRequest) => {
  const { data } = await api.post<User>('/auth/register', registerData);
  return data;
};
export const login = async (loginData: registerRequest) => {
  const { data } = await api.post<User>('/auth/login', loginData);
  return data;
};

export const logout = async (): Promise<void> => {
  await api.post('/auth/logout');
};
export const checkSession = async (id: string): Promise<Note> => {
  const { data } = await api.get<Note>(`/notes/${id}`);
  return data;
};
export const getMe = async () => {
  const { data } = await api.get<Users>('/users/me');
  return data;
};
export const updateMe = async (updateData: updateRequest) => {
  const { data } = await api.patch<Users>('/users/me', updateData);
  return data;
};

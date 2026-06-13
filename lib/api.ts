import axios from 'axios';
import { type Note } from '../types/note';
import { type NoteTag } from '../types/note';
import { type User } from '../types/note';

interface FetchNotesParams {
  page: number;
  perPage?: number;
  search?: string;
  tag?: string;
}

type CheckSessionRequest = {
  success: boolean;
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

const NEXT_PUBLIC_NOTEHUB_TOKEN = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: `http://localhost:3000/api`,
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
  console.log('API Response:', page, perPage, search, tag);
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
export const getSingleNote = async (id: string): Promise<Note> => {
  const { data } = await api.get<Note>(`/notes/${id}`);
  return data;
};

export const checkSession = async () => {
  const res = await api.get<CheckSessionRequest>('/auth/session');
  return res.data.success;
};
export const getMe = async () => {
  const { data } = await api.get<User>('/users/me');
  return data;
};

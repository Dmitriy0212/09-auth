'use client';

import css from './NoteDetails.module.css';
type Note = {
  title: string;
  tag: string;
  content: string;
  createdAt: string;
};

type Props = {
  data?: Note;
};

export default function NoteDetailsClient({ data }: Props) {
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{data?.title}</h2>
        </div>
        <p className={css.tag}>{data?.tag}</p>
        <p className={css.content}>{data?.content}</p>
        <p className={css.date}>{data?.createdAt}</p>
      </div>
    </div>
  );
}

import css from '../[...slug]/Notes.module.css';
import { fetchNotes } from '../../../../lib/api';
import NotesClient from './Notes.client';
import type { Metadata } from 'next';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { NoteTag } from '@/types/note';
type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  console.log('Generating metadata for filter:', slug);
  return {
    title: `Note: ${slug}`,
    description: `Note by: ${slug}`,
    openGraph: {
      title: `Note: ${slug}`,
      description: `Note by: ${slug}`,
      url: `/notes/filter/${slug}`,
      siteName: 'NoteHub',
      images: ['https://ac.goit.global/fullstack/react/notehub-og-meta.jpg'],
      type: 'article',
    },
  };
}

export default async function NotesPage({ params }: Props) {
  const queryClient = new QueryClient();

  const { slug } = await params;

  const tag: NoteTag | undefined =
    slug?.[0] && slug?.[0] !== 'all' ? (slug?.[0] as NoteTag) : undefined;

  await queryClient.prefetchQuery({
    queryKey: ['notes', 1, tag],
    queryFn: () =>
      fetchNotes({
        page: 1,
        search: undefined,
        perPage: 12,
        tag: tag,
      }),
  });

  return (
    <div className={css.app}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient tag={tag} />
      </HydrationBoundary>
    </div>
  );
}

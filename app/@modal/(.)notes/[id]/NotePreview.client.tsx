'use client';

import { useParams } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { getSingleNote } from '@/lib/api';
import Modal from '../../../../components/Modal/Modal';
import NoteDetailsClient from '../../../notes/[id]/NoteDetails.client';

export default function NotePreviewClient() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error } = useQuery({
    queryKey: ['note', id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading, please wait...</p>;
  if (error) return <p>Something went wrong.</p>;
  return (
    <Modal>
      <NoteDetailsClient />
    </Modal>
  );
}

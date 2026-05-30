import { getSingleNote } from '@/lib/api';
import Modal from '../../../../components/Modal/Modal';
import NotePreviewClient from '../[id]/NotePreview.client';

type Props = {
  params: Promise<{ id: string }>;
};
const NotePreview = async ({ params }: Props) => {
  const { id } = await params;
  const note = await getSingleNote(id);
  return (
    <Modal>
      <NotePreviewClient data={note} />
    </Modal>
  );
};

export default NotePreview;

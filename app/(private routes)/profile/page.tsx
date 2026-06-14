import type { Metadata } from 'next';
import { getMe } from '@/lib/api/serverApi';
import ProfileClient from './ProfileClient';

export async function generateMetadata(): Promise<Metadata> {
  const user = await getMe();

  return {
    title: user.username,
    description: `${user.username} profile page`,
    openGraph: {
      title: user.username,
      description: `${user.username} profile`,
      url: '/profile',
      siteName: 'NoteHub',
      images: [
        {
          url: user.avatar,
          width: 1200,
          height: 630,
          alt: user.username,
        },
      ],
      type: 'profile',
    },
  };
}

export default function ProfilePage() {
  return <ProfileClient />;
}

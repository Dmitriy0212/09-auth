'use client';

import Image from 'next/image';
import Link from 'next/link';
import css from './ProfilePage.module.css';
import { User } from '@/types/user';

type Props = {
  user: User;
};

export default function ProfileClient({ user }: Props) {
  const avatar =
    user.avatar?.trim() ||
    'https://ac.goit.global/fullstack/react/default-avatar.jpg';

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <div className={css.header}>
          <h1 className={css.formTitle}>Profile Page</h1>

          <Link href="/profile/edit" className={css.editProfileButton}>
            Edit Profile
          </Link>
        </div>

        <div className={css.avatarWrapper}>
          <Image
            src={avatar}
            alt={user.username}
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>

        <div className={css.profileInfo}>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </main>
  );
}

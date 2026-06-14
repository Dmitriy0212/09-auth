'use client';

import Link from 'next/link';
import css from './ProfilePage.module.css';
import { getMe } from '@/lib/api/clientApi';
import { User } from '@/types/user';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    async function load() {
      const data = await getMe();
      setUserData(data);
    }

    load();
  }, []);

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
          <img
            src={userData?.avatar}
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        </div>

        <div className={css.profileInfo}>
          <p>Username: {userData?.username}</p>
          <p>Email: {userData?.email}</p>
        </div>
      </div>
    </main>
  );
}

'use client';
import Link from 'next/link';
import css from './SidebarNotes.module.css';
interface SidebarNotesProps {
  tag?: string[];
}
function SidebarNotes(tag: SidebarNotesProps) {
  return (
    <div>
      <ul className={css.menuList}>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/all`} className={css.menuLink}>
            All notes
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/Todo`} className={css.menuLink}>
            Todo
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/Work`} className={css.menuLink}>
            Work
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/Personal`} className={css.menuLink}>
            Personal
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/Meeting`} className={css.menuLink}>
            Meeting
          </Link>
        </li>
        <li className={css.menuItem}>
          <Link href={`/notes/filter/Shopping`} className={css.menuLink}>
            Shopping
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SidebarNotes;

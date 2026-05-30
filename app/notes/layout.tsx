import css from './LayoutNotes.module.css';
import SidebarNotes from './filter/@sidebar/default';
export default function LayoutNotes({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={css.container}>
      <div className={css.sidebar}>
        <div className={css.notesWrapper}>
          <SidebarNotes />
        </div>
      </div>
      {children}
    </div>
  );
}

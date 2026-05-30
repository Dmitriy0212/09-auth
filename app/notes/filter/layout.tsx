import SidebarNotes from './@sidebar/default';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarNotes />
      {children}
    </>
  );
}

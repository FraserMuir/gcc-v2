import Link from 'next/link';

import { Header } from '~/components/header';

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <h1>Site Layout</h1>
      {children}
      <Link href="/admin">Admin</Link>
    </>
  );
};

export default SiteLayout;

import Header from '~/components/header';
import Link from 'next/link';

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <h1>Site Layout</h1>
      {children}
      <Link href="/admin">Admin</Link>
    </div>
  );
};

export default SiteLayout;

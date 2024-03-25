import Link from 'next/link';

import { fetchNavigationData } from '~/lib/navigation-data';

import { GCCTextLogo } from './gcc-logo';
import { Navigation } from './navigation/navigation';
import { SkipToContent } from './skip-to-content';

export const Header = async () => {
  const navigationData = await fetchNavigationData();

  return (
    <header className="fixed flex w-full items-center gap-2 bg-gray-100 p-2 lg:gap-4 lg:p-4">
      <SkipToContent />
      <Link href="/">
        <GCCTextLogo />
      </Link>
      <Navigation navigationData={navigationData} />
    </header>
  );
};

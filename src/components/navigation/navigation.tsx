'use client';

import { useEffect, useState } from 'react';

import { type NavigationData } from '~/lib/navigation-data';

import { DesktopNavigation } from './desktop-navigation';
import { MobileNavigation } from './mobile-navigation';

const NAVIGATION_TYPE = {
  DESKTOP: 'desktop',
  MOBILE: 'mobile',
} as const;

type NavigationType = (typeof NAVIGATION_TYPE)[keyof typeof NAVIGATION_TYPE];

export const Navigation = ({ navigationData }: { navigationData: NavigationData }) => {
  const [navType, setNavType] = useState<NavigationType>();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    const handleMediaQuery = (e: MediaQueryList | MediaQueryListEvent) => {
      setNavType(e.matches ? NAVIGATION_TYPE.MOBILE : NAVIGATION_TYPE.DESKTOP);
    };

    handleMediaQuery(mediaQuery);

    mediaQuery.addEventListener('change', handleMediaQuery);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQuery);
    };
  }, []);

  if (!navType) return null;

  return navType === NAVIGATION_TYPE.DESKTOP ? (
    <DesktopNavigation navigationData={navigationData} />
  ) : (
    <MobileNavigation navigationData={navigationData} />
  );
};

'use client';

import { useState, type Dispatch, type SetStateAction } from 'react';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';

import { type NavigationData } from '~/lib/navigation-data';
import { cn } from '~/lib/utils';

export const MobileNavigation = ({ navigationData }: { navigationData: NavigationData }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex grow justify-end">
      <NavigationMenu.Root id="menu"></NavigationMenu.Root>
      <MobileNavigationButton isNavOpen={isOpen} setIsNavOpen={setIsOpen} />
    </div>
  );
};

type MobileNavigationButtonProps = {
  isNavOpen: boolean;
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileNavigationButton = ({ isNavOpen, setIsNavOpen }: MobileNavigationButtonProps) => {
  return (
    <button
      className="relative mx-4 flex size-8 items-center justify-center"
      onClick={() => setIsNavOpen((prev) => !prev)}
    >
      <div
        className={cn(
          'absolute w-8 origin-center rounded border-[1.5px] border-accent bg-accent transition-all',
          isNavOpen ? 'rotate-45' : 'translate-y-2',
        )}
      />
      <div
        className={cn(
          'absolute w-8 origin-center rounded border-[1.5px] border-accent bg-accent transition-all',
          isNavOpen ? '-rotate-45' : '-translate-y-2',
        )}
      />
    </button>
  );
};

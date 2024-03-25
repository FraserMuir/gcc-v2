'use client';

import { useState, type PropsWithChildren } from 'react';
import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { AnimatePresence, motion } from 'framer-motion';

import { type NavigationData, type NavPage, type NavSubItem } from '~/lib/navigation-data';

export const DesktopNavigation = ({ navigationData }: { navigationData: NavigationData }) => {
  const [openId, setOpenId] = useState<string>();

  const handleSelectPage = (item: NavPage) => setOpenId((prev) => (prev === item.name ? undefined : item.name));
  const handleUnselectPage = () => setOpenId(undefined);

  return (
    <NavigationMenu.Root id="menu" className="grow text-accent">
      <NavigationMenu.List className="flex justify-center">
        {navigationData.pages.map((page) => (
          <NavigationMenu.Item
            key={page.name}
            onMouseEnter={() => handleSelectPage(page)}
            onMouseLeave={handleUnselectPage}
            onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && handleUnselectPage()}
            className="group relative h-[3.3rem] max-w-52 shrink grow basis-0 focus-within:bg-white hover:bg-white"
          >
            <NavItem page={page} onSelect={handleSelectPage} />

            {page.subItems && (
              <AnimatePresence initial={false}>
                {openId === page.name && (
                  <NavigationMenu.Content asChild forceMount onEscapeKeyDown={handleUnselectPage}>
                    <motion.div
                      key={`content-${page.name}`}
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, y: 0 },
                        collapsed: { opacity: 0, y: -7 },
                      }}
                      transition={{ duration: 0.15 }}
                      className="absolute mt-4 w-full bg-white pt-[3rem] lg:pt-[3.5rem]"
                    >
                      {page.subItems.map((subItem) => (
                        <NavSubItem key={subItem.name} subItem={subItem} />
                      ))}
                    </motion.div>
                  </NavigationMenu.Content>
                )}
              </AnimatePresence>
            )}
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

const NavItem = ({ page, onSelect }: { page: NavPage; onSelect: (page: NavPage) => void }) => {
  const renderItem = () => (
    <div className="relative mx-2 my-4 cursor-pointer whitespace-nowrap text-center font-serif uppercase md:m-4">
      {page.name}
      <span
        className="absolute block h-0.5 w-full scale-0 bg-accent transition duration-300 group-focus-within:scale-100 group-hover:scale-100"
        aria-hidden="true"
      />
    </div>
  );

  if (page.link) {
    return (
      <InternalLink href={page.link} className="absolute inset-0">
        {renderItem()}
      </InternalLink>
    );
  }
  return (
    <NavigationMenu.Trigger
      className="absolute inset-0 z-10"
      onClick={() => onSelect(page)}
      onTouchStart={() => onSelect(page)}
    >
      {renderItem()}
    </NavigationMenu.Trigger>
  );
};

const NavSubItem = ({ subItem }: { subItem: NavSubItem }) => {
  return (
    <InternalLink href={subItem.link} className="group/link">
      <div className="cursor-pointer p-4 font-serif text-sm hover:bg-gray-100 group-focus/link:bg-gray-100">
        {subItem.name}
      </div>
    </InternalLink>
  );
};

type InternalLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & PropsWithChildren<LinkProps>;
const InternalLink = ({ href, ...props }: InternalLinkProps) => {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <NavigationMenu.Link asChild active={isActive}>
      <Link href={href} {...props} />
    </NavigationMenu.Link>
  );
};

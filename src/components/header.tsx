import Link from 'next/link';

import { GCCTextLogo } from './gcc-logo';

type Page = {
  name: string;
  link?: string;
  subItems?: Page[];
};

const pages: Page[] = [
  {
    name: 'Meetings',
    subItems: [
      { name: 'Next Meeting', link: '/next-meeting' },
      { name: 'Historical Meetings', link: '/historical-meetings' },
    ],
  },
  {
    name: 'Gallery',
    link: '/gallery',
  },
  {
    name: 'Local Info',
    subItems: [
      { name: 'Links', link: '/links' },
      { name: 'Events', link: '/events' },
    ],
  },
  {
    name: 'News',
    link: '/news',
  },
] as const;

const Header = () => {
  return (
    <header className="flex items-center bg-gray-100 p-4">
      <GCCTextLogo />
      <div id="menu" className="flex grow justify-center">
        {pages.map((page) => (
          <div key={page.name} className="group relative max-w-52 grow items-center">
            <div className="cursor-pointer p-4 text-center font-serif uppercase hover:bg-white">
              {page.link ? <Link href={page.link}>{page.name}</Link> : <>{page.name}</>}
            </div>

            {page.subItems && (
              <div className="absolute z-10 hidden w-full bg-white shadow-lg group-hover:block">
                {page.subItems.map((subItem) => (
                  <div key={subItem.name} className="cursor-pointer p-4 font-serif hover:bg-gray-100">
                    {subItem.link ? <Link href={subItem.link}>{subItem.name}</Link> : <>{subItem.name}</>}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;

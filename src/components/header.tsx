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
            <div className="cursor-pointer border text-center font-serif uppercase group-hover:bg-white">
              <HeaderItem page={page} />
            </div>

            {page.subItems && (
              <div className="absolute hidden w-full bg-white pt-4 shadow-lg group-hover:block">
                {page.subItems.map((subItem) => (
                  <div key={subItem.name} className="cursor-pointer p-4 font-serif text-sm hover:bg-gray-100">
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

const HeaderItem = ({ page }: { page: Page }) => {
  const renderItem = () => (
    <div className="relative mx-4 my-3">
      {page.name}
      <span
        className="absolute block h-0.5 w-full scale-0 bg-red-200 transition duration-300 group-hover:scale-100"
        aria-hidden="true"
      />
    </div>
  );

  if (page.link) {
    return <Link href={page.link}>{renderItem()}</Link>;
  }
  return renderItem();
};

export default Header;

'use client';

import { useState } from 'react';

export const SkipToContent = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleKeyUp = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (['Enter', 'Escape', 'Tab', 'Space'].includes(e.code) && isOpened) {
      e.currentTarget.blur();
      if (['Enter', 'Space'].includes(e.code)) {
        e.preventDefault();
        e.currentTarget.click();
      }
    }
  };

  return (
    <a
      className="absolute top-0 z-50 -translate-y-full bg-accent p-3 text-inverse-primary underline duration-150 focus:translate-y-1/2"
      href="#main"
      onKeyDown={handleKeyUp}
      onFocus={() => setIsOpened(true)}
      onBlur={() => setIsOpened(false)}
    >
      Skip to content
    </a>
  );
};

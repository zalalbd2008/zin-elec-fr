import React from 'react';
import Image from 'next/image';

import Navigation from '@/components/navigator';
import Link from 'next/link';

async function Header() {
  return (
    <header className="lg:container px-3 lg:px-16 p-2">
      <div className="flex justify-between">
        <Link href="/" className="p-4">
          <Image
            className="w-[160px] h-[40px] object-fill"
            src="/logo.webp"
            alt="logo"
            width={100}
            height={100}
            priority
          
          />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;

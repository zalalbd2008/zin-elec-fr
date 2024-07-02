'use client';

import { useMedia } from 'react-use';
import { useState } from 'react';
import { Menu, Phone } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import NavButton from '@/components/nav-button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const routes = [
  {
    href: '/',
    label: 'Accueil',
  },
  {
    href: '/propos',
    label: 'A propos',
  },
  {
    href: '/services',
    label: 'Services',
  },
  {
    href: '/contactez-nous',
    label: 'contactez-nous',
  },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia('(max-width: 1024px)', false);
  const handelClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            type="button"
            title="click me for the see the menu"
            variant="outline"
            size="sm"
            className="font-normal bg-black hover:bg-black/80 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition "
          >
            <Menu className="size-6 text-[24px]" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map(route => (
              <Button
                key={route.href}
                variant={
                  route.href === pathname
                    ? 'secondary'
                    : 'ghost'
                }
                onClick={() => handelClick(route.href)}
                className="w-full justify-start text-[18px]"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <div className="flex gap-x-6">
      <div className="hidden lg:flex items-center gap-x-7  overflow-y-aut o">
        {routes.map(router => (
          <NavButton
            key={router.href}
            href={router.href}
            label={router.label}
            isActive={router.href === pathname}
          />
        ))}
      </div>
      {/* Extra method add  */}
      <div className="flex  gap-x-4">
        <div className="h-full w-px bg-black/40 " />{' '}
        <div className=" flex items-center gap-x-2">
          <div>
            <Phone className="size-8" />
          </div>
          <div>
            <p className="text-slate-600 text-[12px] font-semibold">
              Telephone
            </p>
            <p className="text-[20px] font-black">
              +33 6 28 91 94 94
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;

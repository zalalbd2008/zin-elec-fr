import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

type Props = {
  href: string;
  label: string;
  isActive?: boolean;
};

function NavButton({ href, label, isActive }: Props) {
  return (
    <Link
      className={cn(
        'font-bold text-[18px]',
        isActive ? ' text-black' : 'text-slate-500'
      )}
      href={href}
    >
      {label}
    </Link>
  );
}

export default NavButton;

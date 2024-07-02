import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import Link from 'next/link';

async function ServiceList({
  show,
  children,
}: {
  show?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <div className="flex justify-between flex-col md:flex-row gap-5">
        <h2
          className={`text-3xl lg:text-5xl py-4  lg:py-6 font-medium text-black/80 md:w-[45%] font-bebas`}
        >
          NOS{' '}
          <span className="text-[#FA7200]">SERVICES</span>{' '}
          <div className="text-[#FA7200] relative w-full">
            <Image
              className="w-[20%] md:w-[30%] absolute  lg:-bottom-5"
              src="/icons/industrial.webp"
              alt="industrial.webp"
              width={200}
              height={300}
            />
          </div>
        </h2>

        <div className="md:w-1/2 block ">
          <p className="text-start md:text-end">
            Découvrez comment nous pouvons répondre à vos
            besoins électriques avec notre gamme complète de
            services professionnels.
          </p>
          <Link
            href="/service"
            className="flex justify-start lg:justify-end mt-5"
          >
            <Button
              className={cn(
                'bg-[#383838] hover:bg-[#C3C3C3] font-semibold',
                show ? 'block' : 'hidden'
              )}
            >
              VOIRE TOUT LES SERVICES
            </Button>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}

export default ServiceList;

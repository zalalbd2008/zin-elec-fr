'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
interface Props {
  title1: string;
  title2?: string;
  des: string;
  show?: boolean;
}

function Hero({ title1, des, title2, show }: Props) {
  const showVarients = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  };

  return (
    <section className="common-background min-h-[400px] lg:min-h-full flex items-center ">
      <article className="lg:container p-12 py-20 lg:px-[85px]">
        <motion.h1
          initial={showVarients.initial}
          animate={showVarients.animate}
          transition={
            (showVarients.transition,
            {
              delay: 0.2,
            })
          }
          className="font-bebas text-4xl lg:text-6xl font-bold text-white"
        >
          {title1}{' '}
          <span className="text-[#FA7200]">{title2}</span>
        </motion.h1>
        <motion.p
          initial={showVarients.initial}
          animate={showVarients.animate}
          transition={
            (showVarients.transition,
            {
              delay: 0.6,
            })
          }
          className="lg:w-1/3 font-rajdhani fotn-bold text-white pt-3"
        >
          {des}
          <Link
            href="/contactez-nous"
            className={cn(
              'mt-4',
              show ? 'block' : 'hidden'
            )}
          >
            <Button className="text-xl font-bold p-4">
              +33 6 28 91 91 94
            </Button>
          </Link>
        </motion.p>
      </article>
    </section>
  );
}

export default Hero;

'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function ElectricalService() {
  const sideShow = {
    offscreen: {
      transition: {
        ease: 'easeInOut',
        duration: 0.4,
      },
    },
    onscreen: {
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
      },
    },
  };
  return (
    <section className="electrical-background min-h-[400px] lg:min-h-[300px] flex items-center md:block">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="lg:container  md:p-12 py-20 lg:px-[85px] flex flex-col lg:flex-row justify-between items-center overflow-x-hidden"
      >
        <motion.div
          variants={{
            offscreen: {
              x: -999,
              ...sideShow.offscreen,
            },
            onscreen: {
              x: 0,
              ...sideShow.onscreen,
            },
          }}
        >
          <h1 className="text-center p-3 lg:text-start text-3xl lg:text-4xl text-white font-bebas my-5 relative">
            VOUS AVEZ UN PROJET OU UN PROBLÈME{' '}
            <span className="text-[#FA7200]">
              {' '}
              ÉLECTRIQUE ?
            </span>
            <Image
              className="w-[20%] md:w-[30%] absolute  lg:-bottom-5   right-52 lg:right-28"
              src="/icons/industrial.webp"
              alt="industrial.webp"
              width={200}
              height={300}
              priority
              quality={75}
              objectFit="cover"
            />
          </h1>
        </motion.div>
        <motion.div
          variants={{
            offscreen: {
              x: 999,
              ...sideShow.offscreen,
            },
            onscreen: {
              x: 0,
              ...sideShow.onscreen,
            },
          }}
        >
          <Link href="/contactez-nous">
            <Button className="text-xl font-bold">
              NOUS CONTACTER
            </Button>
          </Link>
          <div className="text-white mt-4 font-bebas  text-xl ">
            +33 6 28 91 94 94
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default ElectricalService;

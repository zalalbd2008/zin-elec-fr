'use client';

import React from 'react';
import { Bebas_Neue } from 'next/font/google';
import Image from 'next/image';
import { MessageCircle, PhoneCall } from 'lucide-react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';



const bebas_neue = Bebas_Neue({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
});

function Hero() {


  return (
    <section className="hero-background pt-5 ">
      <div className="container p-6 lg:px-[70px]">
        {/* ITEM - 1  */}
        <div className="flex gap-x-7 flex-col md:flex-row">
          <div className="flex gap-x-2 items-center">
            <PhoneCall className="size-6 text-orange-600 -rotate-90" />

            <span className="font-semibold text-[20px]">
              +33 6 28 91 91 94
            </span>
          </div>

          <div className="flex gap-x-2 items-center">
            <MessageCircle className="size-6 text-orange-600 " />

            <span className="font-semibold text-lg">
              contact@electricien-perpignan.fr
            </span>
          </div>
        </div>
        {/* ITEM - 2 */}
        <div>
          <h1
            className={`text-4xl md:text-5xl  lg:text-[7rem] xl:leading-[110px] py-4  lg:py-6 font-bold text-black/80 md:w-[45%] ${bebas_neue.className}`}
          >
            INSTALLATIONS
            <br />
            <span className="text-[#FA7200]">
              ÉLECTRIQUES
            </span>{' '}
            <span>&</span>{' '}
            <br className="hidden md:block" />{' '}
            <div className="text-[#FA7200] relative w-full">
              <span> RÉPARATIONS</span>
              <Image
                className="w-1/3  absolute lg:left-48 lg:-bottom-7"
                src="/icons/industrial.webp"
                alt="industrial.webp"
                width={200}
                height={300}
              />
            </div>
          </h1>
        </div>
        {/*  ITEM - 3 */}
        <div className="w-1/2 py-5 text-black font-medium ">
          <p>
            Des installations électriques impeccables et des
            réparations rapides pour un environnement
            électrique fiable et sûr
          </p>
        </div>
        {/*  ITEM - 4 */}
        <div>
          
          <div className="h-[200px]">
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
                display: 'none',
              }}
              animate={{
                opacity: 1,
                y: 0,
                display: 'block',
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <div
                className={`flex flex-col md:flex-row justify-start lg:items-center gap-x-5 `}
              >
                <div>
                  <div
                    className={`text-4xl text-orange-500 ${bebas_neue.className}`}
                  >
                    <CountUp end={36} duration={5} />
                    <span>K+</span>
                  </div>
                  <div className="font-semibold">
                    Clients satisfait
                  </div>
                </div>
                {/*  */}
                <div>
                  <div
                    className={`text-4xl text-orange-500 ${bebas_neue.className}`}
                  >
                    <CountUp end={754} duration={3} />
                    <span>+</span>
                  </div>
                  <div className="font-semibold">
                    Projets terminer
                  </div>
                </div>
                <div>
                  <div
                    className={`text-4xl text-orange-500 ${bebas_neue.className}`}
                  >
                    <CountUp end={100} duration={3} />
                    <span>%</span>
                  </div>
                  <div className=" font-semibold">
                    Projets en cours
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Hero;

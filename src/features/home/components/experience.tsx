'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Bebas_Neue } from 'next/font/google';
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

const bebas_neue = Bebas_Neue({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
});

function Experience() {
  const imagesVariants = {
    offscreen: {
      opacity: 0,
      scale: 0.6,
      transition: {
        ease: 'easeInOut',
        duration: 0.4,
      },
    },

    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'easeInOut',
        duration: 0.5,
      },
    },
  };

  return (
    <section className="pt-7 mt-4">
      <div>
        <div className="lg:px-[70px] lg:container lg:w-[60%] block mx-auto">
          <h2
            className={`text-4xl lg:text-6xl font-bold text-center relative ${bebas_neue.className}`}
          >
            +30 ANS D’
            <span className="text-orange-500 ">
              EXPERIENCE
            </span>
            <picture>
              <Image
                className="w-[15%]  absolute -bottom-6 left-[45%]"
                src="/icons/industrial.webp"
                alt="industrial.webp"
                width={200}
                height={300}
              />
            </picture>
          </h2>
        </div>
        {/* item */}
        <div
          className="bg-[#FBF7F4]
        
        "
        >
          <div className=" lg:container grid grid-cols-1 lg:grid-cols-3 items-center mt-[70px]">
            <motion.div
              className="lg:px-[70px] py-7  flex justify-center relative col-span-2"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div
                variants={imagesVariants}
                className="hidden md:block"
              >
                <Image
                  src="/images/experience-1.jpg"
                  alt="logo"
                  className="w-[250px] h-[150px] rounded-[77px] relative left-8 -top-10 border-[10px] border-white"
                  width={300}
                  height={300}
                />
              </motion.div>
              <motion.div variants={imagesVariants}>
                <Image
                  src="/images/experience-2.jpg"
                  className="w-[400px]  rounded-[140px] p-2 lg:p-0"
                  alt="logo"
                  width={200}
                  height={300}
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="overflow-hidden"
            >
              <motion.div
                className="flex flex-col lg:items-start text-start p-10 lg:p-0 overflow-hidden"
                variants={{
                  offscreen: {
                    x: 999,
                    transition: {
                      ease: 'easeInOut',
                      duration: 0.4,
                    },
                  },
                  onscreen: {
                    x: 0,
                    transition: {
                      ease: 'easeInOut',
                      duration: 0.5,
                    },
                  },
                }}
              >
                <h3 className="text-2xl font-medium font-bebas">
                  SOUS LICENCE ET APPROUVÉ PAR DES MILLIERS
                  DE PERSONNES
                </h3>
                <p className="font-medium mt-4">
                  notre engagement envers l’excellence et la
                  satisfaction client est inébranlable. Nous
                  nous efforçons de maintenir cette
                  confiance en fournissant des produits et
                  des services de haute qualité, répondant
                  ainsi aux normes les plus strictes de
                  l’industrie. Rejoignez-nous pour une
                  expérience électrique sans compromis
                </p>
                <Link className="mt-5 w-1/3" href="/propos">
                  <Button className="w-full font-bold">
                    EN SAVOIR PLUS
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;

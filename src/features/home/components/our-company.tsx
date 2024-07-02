'use client';
import React from 'react';
import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';
import { motion } from 'framer-motion';

import { Card, CardContent } from '@/components/ui/card';

const bebas_neue = Bebas_Neue({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
});

function OurCompany() {
  const cardVariants = {
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
      <div className="container p-6 lg:px-[70px]">
        <div className="lg:w-[60%] block mx-auto">
          <h2
            className={`text-4xl lg:text-6xl font-bold text-center relative ${bebas_neue.className}`}
          >
            POURQUOI CHOISIR NOTRE{' '}
            <span className="text-orange-500 ">
              ENTREPRISE
            </span>
            <Image
              className="w-[20%]  absolute -bottom-4 left-[45%]"
              src="/icons/industrial.webp"
              alt="industrial.webp"
              width={200}
              height={300}
            />
          </h2>
        </div>
        <div className=" md:w-1/2 2xl:w-[40%]  block mx-auto text-center">
          <p className="mt-6 font-medium text-black font-rajdhani">
            Optez pour notre entreprise et bénéficiez d’une
            expérience inégalée dans le domaine électrique,
            d’un service clientèle exceptionnel et d’un
            engagement indéfectible envers la qualité et la
            fiabilité
          </p>
        </div>
        {/* Card  */}

        <motion.div
          className=" mx-auto block mt-10 i"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true}}
        >
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-rajdhan">
            <motion.div
              variants={cardVariants}
              className={`border text-white bg-[#333333] hover:-translate-y-2 transition-transform p-4 rounded-xl`}
            >
              <Card
                className={`bg-transparent text-white border-none`}
              >
                <CardContent>
                  <h3
                    className={`text-2xl font-bold mt-5 ${bebas_neue.className}`}
                  >
                    PROJETS À GRANDE ÉCHELLE
                  </h3>
                  <p className="mt-2">
                    Pour des projets d’envergure, optez pour
                    notre expertise et notre
                    professionnalisme assurant le succès de
                    votre entreprise
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className={`border text-white bg-[#333333] hover:-translate-y-2 transition-transform p-4 rounded-xl`}
            >
              <Card
                className={`bg-transparent text-white border-none`}
              >
                <CardContent>
                  <h3
                    className={`text-2xl font-bold mt-5 ${bebas_neue.className}`}
                  >
                    PETITES SOLUTIONS
                  </h3>
                  <p className="mt-2">
                    Notre approche détaillée assure des
                    réponses efficaces, sur mesure et
                    rapides, adaptées à vos besoins
                    spécifiques
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className={`border text-white bg-[#333333] hover:-translate-y-2 transition-transform p-4  rounded-xl`}
            >
              <Card
                className={`bg-transparent text-white border-none`}
              >
                <CardContent>
                  <h3
                    className={`text-2xl font-bold mt-5 ${bebas_neue.className}`}
                  >
                    INSTALLATIONS RAPIDES
                  </h3>
                  <p className="mt-2">
                    Notre expertise assure une mise en place
                    efficace, adaptée à vos besoins
                    spécifiques et durables
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className={`border text-white bg-[#333333] hover:-translate-y-2 transition-transform p-4  rounded-xl`}
            >
              {' '}
              <Card
                className={`bg-transparent text-white border-none`}
              >
                <CardContent>
                  <h3
                    className={`text-2xl font-bold mt-5 ${bebas_neue.className}`}
                  >
                    SERVICE COMPLET
                  </h3>
                  <p className="mt-2">
                    Une infrastructure de service complet,
                    conçue pour répondre à tous vos besoins
                    électriques avec efficacité et fiabilité
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default OurCompany;

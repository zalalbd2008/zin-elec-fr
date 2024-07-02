'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function AboutUsItem() {
  const variants = {
    offscreen: {
      y: 10,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <div className="about-us-background">
        <div className="lg:px-[70px] lg:container pt-5">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className=" lg:px-[10px] lg:container pt-5"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
              <div className="relative">
                <Image
                  className="border-[15px] rounded-2xl  h-[300px]"
                  src="/images/about-us-electric.jpg"
                  alt="about-us-chantier-electricite"
                  width={500}
                  height={500}
                />
                <div className=" hidden lg:flex justify-end ">
                  <Image
                    className="border-[15px] rounded-2xl relative -top-20 right-5 w-[250px] "
                    src="/images/about-us-chantier-electricite.webp"
                    alt="about-us-chantier-electricite"
                    objectFit="conver"
                    priority
                    width={500}
                    height={500}
                  />
                </div>
              </div>

              <article>
                <motion.h2
                  variants={variants}
                  transition={{
                    delay: 0.3,
                    ease: 'easeInOut',
                  }}
                  className="font-bebas text-4xl font-semibold overflow-hidden"
                >
                  À propos de{' '}
                  <span className="text-orange-500 ">
                    zin elec
                  </span>
                </motion.h2>
                <p className="lg:w-9/12 block mt-6">
                  Bienvenue sur ZIN ELEC, votre partenaire
                  de confiance pour tous vos besoins
                  électriques. Depuis <b>2015 </b>, nous
                  nous engageons à fournir des solutions
                  électriques de qualité supérieure à nos
                  clients.
                </p>
                <p className="mt-5 lg:w-9/12 block ">
                  Notre équipe d’électriciens qualifiés et
                  expérimentés est passionnée par son métier
                  et dévouée à offrir un service
                  exceptionnel à chaque client. Que ce soit
                  pour des installations, des réparations,
                  des entretiens ou des conseils, nous
                  mettons notre expertise au service de
                  votre tranquillité d’esprit.
                </p>
              </article>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="about-us-background">
        <div className="lg:px-[70px] lg:container ">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className=" lg:px-[10px]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5">
              <article>
                <motion.p
                  variants={variants}
                  transition={{
                    delay: 0.3,
                    ease: 'easeInOut',
                  }}
                  className="lg:w-9/12 block mt-6"
                >
                  Chez ZIN ELEC, noussss croyons en la
                  satisfaction totale du client. C’est
                  pourquoi nous nous efforçons de comprendre
                  vos besoins spécifiques et de fournir des
                  solutions sur mesure qui répondent à vos
                  attentes. Nous sommes fiers de la relation
                  de confiance que nous avons établie avec
                  nos clients au fil des années.
                </motion.p>
                <motion.p
                  variants={variants}
                  transition={{
                    delay: 0.4,
                    ease: 'easeInOut',
                  }}
                  className="lg:w-9/12 block mt-6"
                >
                  Au-delà de notre engagement envers
                  l’excellence technique, nous accordons une
                  grande importance à la sécurité, à
                  l’efficacité énergétique et à l’innovation
                  dans tout ce que nous faisons. Nous nous
                  engageons également à rester à jour avec
                  les dernières technologies et les
                  meilleures pratiques de l’industrie pour
                  mieux vous servir.
                </motion.p>
                <motion.p
                  variants={variants}
                  transition={{
                    delay: 0.4,
                    ease: 'easeInOut',
                  }}
                  className="lg:w-9/12 block mt-6"
                >
                  Nous sommes impatients de travailler avec
                  vous pour réaliser vos projets
                  électriques, grands ou petits.
                  Contactez-nous dès aujourd’hui pour en
                  savoir plus sur nos services et découvrez
                  comment nous pouvons vous aider à
                  atteindre vos objectifs électriques.
                </motion.p>
                <Link
                  href="contactez-nous"
                  className="mt-5"
                >
                  <Button className="text-lg mt-5">
                    NOUS CONTACTEZ
                  </Button>
                </Link>
              </article>
              <div className="relative hidden lg:block">
                <Image
                  className="border-[15px] rounded-2xl  h-[300px]"
                  src="/images/about-us-electric.jpg"
                  alt="about-us-chantier-electricite"
                  width={500}
                  height={500}
                />
                <div className=" hidden lg:flex justify-end ">
                  <Image
                    className="border-[15px] rounded-2xl relative -top-20 right-5 w-[250px] "
                    src="/images/about-us-chantier-electricite.webp"
                    alt="about-us-chantier-electricite"
                    objectFit="conver"
                    priority
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default AboutUsItem;

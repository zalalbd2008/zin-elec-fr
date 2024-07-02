'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

function LightUpFuture() {
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
    <section className="bg-[#F1E8DC]">
      <div className="lg:container  md:p-12 py-20 lg:px-[85px]">
        <motion.div className="bg-white rounded-md m-5 lg:m-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-16 ">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
              >
                <motion.h2
                  variants={variants}
                  transition={{
                    delay: 0.3,
                    ease: 'easeInOut',
                  }}
                  className="text-4xl text-black/70"
                >
                  Éclairez votre avenir
                </motion.h2>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
              >
                <motion.p
                  variants={variants}
                  transition={{
                    delay: 0.4,
                    ease: 'easeInOut',
                  }}
                  className=""
                >
                  Notre expérience et notre engagement
                  envers la qualité font de nous votre choix
                  incontournable en matière d’électricité.
                  Fiez-vous à notre expertise pour des
                  solutions fiables et durables
                </motion.p>
              </motion.div>
              <motion.div
                className="mt-6 flex flex-col lg:flex-row gap-x-10"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
              >
                <motion.div
                  variants={variants}
                  transition={{
                    delay: 0.4,
                    ease: 'easeInOut',
                  }}
                  className=""
                >
                  <div>Projet fini</div>
                  <h4 className="text-xl text-orange-500">
                    +500
                  </h4>
                </motion.div>
                <motion.div
                  variants={variants}
                  transition={{
                    delay: 0.4,
                    ease: 'easeInOut',
                  }}
                  className=""
                >
                  <div>Experience</div>
                  <h4 className="text-xl text-orange-500">
                    +10 ans
                  </h4>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true }}
              className="w-full relative"
            >
              <motion.div
                variants={variants}
                transition={{
                  delay: 0.5,
                  ease: 'easeInOut',
                }}
              >
                <Image
                  className="w-full h-[380px] object-cover"
                  src="/images/about-us-construction.webp"
                  alt="about-us-construction"
                  width={400}
                  height={400}
                />
                <div className="flex gap-x-5 absolute bottom-0 right-0 bg-white items-center p-5 rounded-t-lg">
                  <div>
                    <Image
                      className="w-[40px] "
                      src="/icons/contact.webp"
                      alt="contact"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div>
                    <Link
                      className="flex flex-col"
                      href="/contactez-nous"
                    >
                      <span>nous contactez</span>
                      <span className="text-orange-500 text-xl font-bold">
                        +33 6 28 91 94 94
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LightUpFuture;

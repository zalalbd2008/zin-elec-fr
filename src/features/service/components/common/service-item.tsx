'use client';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ITEMS = [
  {
    icon: '/icons/industrial-service-icon.webp',
    title: 'INSTALLATION ÉLECTRIQUE',
    description:
      'Installation de câblages, prises, interrupteurs, luminaires, etc.',
    count: 1,
    delay: 0.2,
  },
  {
    icon: '/icons/tool-service-icon.webp',
    title: 'RÉPARATIONS ÉLECTRIQUES',
    description:
      'Dépannage et réparation des systèmes électriques défectueux',
    count: 2,
    delay: 0.3,
  },
  {
    icon: '/icons/electrician-service-icon.webp',
    title: 'ENTRETIEN ÉLECTRIQUE',
    description:
      'Maintenance préventive pour assurer le bon fonctionnement des installations électriques.',
    count: 3,
    delay: 0.4,
  },
  {
    icon: '/icons/electrician-2-service-icons.webp',
    title: 'MISE EN CONFORMITÉ',
    description:
      'Mise aux normes des installations électriques selon les réglementations en vigueur.',
    count: 4,
    delay: 0.5,
  },
  {
    icon: '/icons/electrician-1-service-icon.webp',
    title: 'DÉPANNAGE D’URGENCE',
    description:
      'Intervention rapide en cas de problème électrique critique.',
    count: 5,
    delay: 0.5,
  },
  {
    icon: '/icons/electrical-service-icon.webp',
    title: 'CONSEILS ET CONSULTATIONS',
    description:
      'Fourniture d’expertise et de conseils pour des projets électriques spécifiques.',
    count: 6,
    delay: 0.4,
  },
  {
    icon: '/icons/plug-service-icon.webp',
    title: 'DOMOTIQUE',
    description:
      'Installation et configuration de systèmes domotiques pour le contrôle à distance des équipements électriques.',
    count: 7,
    delay: 0.3,
  },
  {
    icon: '/icons/lightbulb-service-icon.webp',
    title: 'ÉCLAIRAGE',
    description:
      'Conception et installation de systèmes d’éclairage intérieur et extérieur.',
    count: 8,
    delay: 0.2,
  },
] as const;

type NumberRange<Min extends number, Max extends number> =
  | Exclude<
      {
        [K in Min | Max]: K;
      }[Min | Max],
      Max
    >
  | Max;

type Limit = NumberRange<4, typeof ITEMS.length> | 'all';

interface Props {
  limit: Limit;
}

const ServiceItem: React.FC<Props> = ({ limit }) => {
  const displayedItems =
    limit === 'all' ? ITEMS : ITEMS.slice(0, limit);
  const cardVariants = {
    offscreen: {
      opacity: 0,
      scale: 0.6,
    },

    onscreen: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true }}
        className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-6 "
      >
        {displayedItems.map(item => (
          <motion.div
            key={item.title + ' ' + item.count}
            variants={cardVariants}
            transition={{
              ease: 'easeInOut',
              delay: item.delay,
            }}
            className="hover:shadow-sm transiton-c transition-transform bg-[#FDFBFA] rounded-xl p-5 "
          >
            <Card className="border-none bg-[#FDFBFA]  shadow-none ">
              <CardContent>
                <div className="flex justify-between">
                  <Image
                    className="w-[40px]"
                    src={item.icon}
                    alt={item.title}
                    width={200}
                    height={200}
                  />
                  <div className="font-bebas text-[#E0C9AB]  text-xl">
                    0{item.count}
                  </div>
                </div>
                <div className="py-3 ">
                  <h1 className="text-start font-medium text-black/80 font-bebas text-lg ">
                    {item.title}
                  </h1>
                  <p>{item.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ServiceItem;

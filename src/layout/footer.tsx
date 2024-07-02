import { Facebook, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Poppins, Exo } from 'next/font/google';
import { Button } from '@/components/ui/button';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
});
const exo = Exo({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
});

async function Footer() {
  return (
    <footer className="bg-[#C3C3C3]/20  md:p-6 lg:px-[165px]">
      <div className="lg:container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
        {/* item - 1  */}
        <div>
          <Image
            className="w-[100px] h-[25px] object-fill"
            src="/logo.webp"
            alt="logo"
            width={100}
            height={100}
            priority={true}
          />
          <p className="font-medium mt-4">
            Votre partenaire électrique de confiance,
            toujours là pour illuminer votre chemin.
          </p>
          <div className="flex gap-x-7 my-5">
            <Link
              className="hover:scale-110 transition-all border  p-2 border-orange-300 rounded-2xl  hover:bg-orange-300"
              href="https://www.facebook.com/"
            >
              <svg
                className="size-4 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </Link>
            <Link
              className="hover:scale-110 transition-all border  p-2 border-orange-300 rounded-2xl  hover:bg-orange-300"
              href
              href="https://x.com/?lang=en"
            >
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </Link>
            <Link
              className="hover:scale-110 transition-all border  p-2 border-orange-300 rounded-2xl  hover:bg-orange-300"
              
              href="https://vimeo.com/"
            >
              {' '}
              <svg
                className="size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z" />
              </svg>
            </Link>
          </div>
        </div>
        {/* item - 2 */}

        <div>
          <h4
            className={`text-xl font-bold ${poppins.className}`}
          >
            Nos Services
          </h4>
          <ol className="px-4 mt-4">
            <li
              className="py-2 text-[13px] font-semibold"
              style={{ listStyleType: 'circle !important' }}
            >
              INSTALLATION ÉLECTRIQUE
            </li>
            <li
              className="py-2 text-[13px] font-semibold"
              style={{ listStyleType: 'circle !important' }}
            >
              REPARATION ÉLECTRIQUE
            </li>
            <li
              className="py-2 text-[13px] font-semibold"
              style={{ listStyleType: 'circle !important' }}
            >
              ENTRETIEN ÉLECTRIQUE
            </li>
            <li
              className="py-2 text-[13px] font-semibold "
              style={{ listStyleType: 'circle !important' }}
            >
              MISE EN CONFORMITÉ
            </li>
          </ol>
        </div>
        {/* item - 3 */}
        <div>
          <h4
            className={`text-xl font-bold ${poppins.className}`}
          >
            Contactez Nous
          </h4>
          <p className="font-medium mt-2">
            Contactez-nous dès aujourd’hui pour des
            solutions électriques sur mesure adaptées à vos
            besoins.
          </p>
          <Link href="/contactez-nous">
            {' '}
            <Button className="bg-[#383838] hover:bg-[#C3C3C3] mt-5">
              ici
            </Button>
          </Link>
        </div>
        {/* item - 4 */}
        <div>
          <h4
            className={`text-xl font-bold ${poppins.className}`}
          >
            Notre Address
          </h4>
          <iframe
            className="w-10/12 border-[7px] border-white mt-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187663.45587890272!2d2.5926838139387662!3d42.69860699206711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b06e4e80fd88fd%3A0x1c83306520f2dd4f!2sPerpignan!5e0!3m2!1sfr!2sfr!4v1715591421541!5m2!1sfr!2sfr"
            width="600"
            height="150"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="mt-10 p-4 lg:px-[100px]">
        <div className="h-px  w-[95%] block lg:flex  mx-auto lg:mx-0   bg-black/20 " />
        <div className="flex flex-col-reverse lg:flex-row justify-between w-[95%] pt-5 gap-5">
          <div
            className={`text-[#91999E] font-medium text-center  ${exo.className}`}
          >
            Copyright © 2024 seodev. All rights reserved.
          </div>
          <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 gap-x-5 text-black">
            <Link href="/" className="font-medium">
              Accueil
            </Link>
            <Link href="/propos" className="font-medium">
              A propos
            </Link>
            <Link href="/services" className="font-medium">
              Services
            </Link>
            <Link
              href="/contactez-nous"
              className="font-medium"
            >
              contactez-nous
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import Image from 'next/image';
import { Poppins } from 'next/font/google';
import React from 'react';

import { Card, CardContent } from '@/components/ui/card';

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
});

function ContactUsList() {
  return (
    <section className="bg-[#EFEFEF]">
      <div className="lg:container p-4 py-12 lg:px-[85px] ">
        {' '}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          {/* item - 1  */}
          <Card className="border-none shadow-xl py-10 rounded-xl">
            <CardContent className="relative">
              <div
                className={`absolute text-9xl text-[#EFEFEF] font-bold ${poppins.className}`}
              >
                01
              </div>
              <div className="flex items-center flex-col py-5 justify-center">
                <Image
                  className="w-[80px] z-10"
                  title="phone"
                  src="/icons/phone.webp"
                  alt="phone"
                  width={400}
                  height={400}
                  priority
                />
                <p className="pt-5 font-bold z-10">
                  Telephone
                </p>
                <p className="font-medium">
                  +33 6 28 91 94 94
                </p>
              </div>
            </CardContent>
          </Card>
          {/* item - 2  */}
          <Card className="border-none shadow-xl py-10 rounded-xl">
            <CardContent className="relative">
              <div
                className={`absolute text-9xl text-[#EFEFEF] font-bold ${poppins.className}`}
              >
                02
              </div>
              <div className="flex items-center flex-col py-5 justify-center">
                <Image
                  className="w-[80px] z-10"
                  title="phone"
                  src="/icons/watsapp.webp"
                  alt="phone"
                  width={400}
                  height={400}
                  priority
                />
                <p className="pt-5 font-bold z-10">
                  Wathsapp
                </p>
                <p className="font-medium">
                  +33 6 28 91 94 94
                </p>
              </div>
            </CardContent>
          </Card>
          {/* item - 3  */}
          <Card className="border-none shadow-xl py-10 rounded-xl">
            <CardContent className="relative">
              <div
                className={`absolute text-9xl text-[#EFEFEF] font-bold ${poppins.className}`}
              >
                03
              </div>
              <div className="flex items-center flex-col py-5 justify-center">
                <Image
                  className="w-[80px] z-10"
                  title="phone"
                  src="/icons/message.avif"
                  alt="phone"
                  width={400}
                  height={400}
                  priority
                />
                <p className="pt-5 font-bold z-10">Email</p>
                <p className="font-medium">
                  zin.elec34@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default ContactUsList;

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Operate() {
  return (
    <section className="lg:px-[70px] lg:container my-5">
      <div className="lg:w-[60%] block mx-auto">
        <h2
          className={`text-4xl lg:text-5xl  text-center relative`}
        >
          the cities where we
          <span className="text-orange-500 ">operate</span>
          <picture>
            <Image
              className="w-[25%]  absolute -bottom-6 left-[45%]"
              src="/icons/industrial.webp"
              alt="industrial.webp"
              width={200}
              height={300}
            />
          </picture>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <ul>
            <li className="list-disc  hover:text-orange-500">
              <Link
                href="perpignan"
                className="font-semibold"
              >
                Perpignan
              </Link>
            </li>
            <li className="list-disc  hover:text-orange-500">
              <Link
                href="perpignan"
                className="font-semibold"
              >
                Saint Esteve
              </Link>
            </li>
            <li className="list-disc  hover:text-orange-500">
              <Link
                href="perpignan"
                className="font-semibold"
              >
                Saint Esteve
              </Link>
            </li>
           
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Operate;

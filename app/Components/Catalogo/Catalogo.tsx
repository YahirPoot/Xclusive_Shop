import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';

const Catalogo = () => {
  return (
    <div className='flex justify-center mt-8'>
      <h1 className="py-3 text-xl">Productos</h1>
      <h1 className="py-3 text-xl">  </h1>
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:gap-20 lg:grid-cols-3">
        {/* Producto 1 */}
        <div>
          <Link href="/Cotizar">
            <div className="relative h-[300px] w-[250px] rounded-lg object-cover object-top">
              <Image
                src="/TermoMarvel.jpg"
                alt="GorraTravis"
                width={250}
                height={500}


              />

              {/* </Image> */}
            </div>
          </Link>
          <div className="Catalogos-center mt-4 flex justify-between">
            <div>
              <h1 className="max-w-[150px] overflow-hidden whitespace-nowrap text-[14px] font-medium">
                Termo Marvel
              </h1>
              <p className="text-[13px] opacity-60">Descripción Producto 1</p>
            </div>
            <span className="rounded-lg bg-gray-100 px-2 font-medium">
              $100.00
            </span>
          </div>
        </div>

        {/* Producto 2 */}
        <div>
          <Link href="/Cotizar">
          <div className="relative h-[300px] w-[250px] rounded-lg object-cover object-top">
              <Image
                src="/GorraTravis.jpg"
                alt="GorraTravis"
                width={250}
                height={500}


              />
            </div>
          </Link>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h1 className="max-w-[150px] overflow-hidden whitespace-nowrap text-[14px] font-medium">
                Gorra Travis
              </h1>
              <p className="text-[13px] opacity-60">Gorra Travis tour</p>
            </div>
            <span className="rounded-lg bg-gray-100 px-2 font-medium">
              $150.00
            </span>
          </div>
        </div>

        {/* Producto 3 */}
        <div>
          <Link href="/dashboard/producto-3">
          <div className="relative h-[300px] w-[250px] rounded-lg object-cover object-top">
              <Image
                src="/TermoStarbucks.jpg"
                alt="GorraTravis"
                width={250}
                height={500}


              />
            </div>
          </Link>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h1 className="max-w-[150px] overflow-hidden whitespace-nowrap text-[14px] font-medium">
              Termo Starbucks
              </h1>
              <p className="text-[13px] opacity-60">Descripción Producto 3</p>
            </div>
            <span className="rounded-lg bg-gray-100 px-2 font-medium">
              $200.00
            </span>
          </div>
          
        </div>

        {/* Producto 4 */}
        <div>
          <Link href="/dashboard/producto-3">
          <div className="relative h-[300px] w-[250px] rounded-lg object-cover object-top">
              <Image
                src="/TazaLuisMiguel.jpg"
                alt="GorraTravis"
                width={250}
                height={500}


              />
            </div>
          </Link>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h1 className="max-w-[150px] overflow-hidden whitespace-nowrap text-[14px] font-medium">
              Taza Luis Miguel
              </h1>
              <p className="text-[13px] opacity-60">Descripción Producto 3</p>
            </div>
            <span className="rounded-lg bg-gray-100 px-2 font-medium">
              $200.00
            </span>
          </div>
        </div>
        

        {/* Producto 5 */}
        <div>
          <Link href="/dashboard/producto-3">
          <div className="relative h-[300px] w-[250px] rounded-lg object-cover object-top">
              <Image
                src="/GorraYe.jpg"
                alt="GorraTravis"
                width={250}
                height={500}


              />
            </div>
          </Link>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h1 className="max-w-[150px] overflow-hidden whitespace-nowrap text-[14px] font-medium">
              Gorra Ye
              </h1>
              <p className="text-[13px] opacity-60">Descripción Producto 3</p>
            </div>
            <span className="rounded-lg bg-gray-100 px-2 font-medium">
              $200.00
            </span>
          </div>
        </div>

        {/* Producto 6 */}
        <div>
          <Link href="/dashboard/producto-3">
          <div className="relative h-[350px] w-[250px] rounded-lg object-cover object-top">
              <Image
                src="/PlayeraLuffy.jpg"
                alt="GorraTravis"
                width={250}
                height={450}


              />
            </div>
          </Link>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h1 className="max-w-[150px] overflow-hidden whitespace-nowrap text-[14px] font-medium">
              Playera Luffy
              </h1>
              <p className="text-[13px] opacity-60">Descripción Producto 3</p>
            </div>
            <span className="rounded-lg bg-gray-100 px-2 font-medium">
              $200.00
            </span>
          </div>
        </div>

        {/* Producto 7 */}
        <div>
          <Link href="/dashboard/producto-3">
          <div className="relative h-[300px] w-[250px] rounded-lg object-cover object-top">
              <Image
                src="/TazaBadBunny.jpg"
                alt="GorraTravis"
                width={250}
                height={500}


              />
            </div>
          </Link>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h1 className="max-w-[150px] overflow-hidden whitespace-nowrap text-[14px] font-medium">
                Nombre Producto 3
              </h1>
              <p className="text-[13px] opacity-60">Descripción Producto 3</p>
            </div>
            <span className="rounded-lg bg-gray-100 px-2 font-medium">
              $200.00
            </span>
          </div>
        </div>

        {/* Producto 8 */}
        <div>
          <Link href="/dashboard/producto-3">
          <div className="relative h-[300px] w-[250px] rounded-lg object-cover object-top">
              <Image
                src="/PlayeraBatman.jpg"
                alt="GorraTravis"
                width={250}
                height={500}


              />
            </div>
          </Link>
          <div className="mt-4 flex items-center justify-between">
            <div>
              <h1 className="max-w-[150px] overflow-hidden whitespace-nowrap text-[14px] font-medium">
                Nombre Producto 3
              </h1>
              <p className="text-[13px] opacity-60">Descripción Producto 3</p>
            </div>
            <span className="rounded-lg bg-gray-100 px-2 font-medium">
              $200.00
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Catalogo;

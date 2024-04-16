import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const CategoriaCotizacion = () => {
  return (
    <div className="font-Poppins bg-stone-600 text-white flex justify-center items-center min-h-screen">
      <div className="py-10 text-center">
        <h5 className="text-fuchsia-50">Muchas Felicidades!</h5>
        <h1 className="mx-auto mb-12 w-96 text-4xl font-bold leading-normal">
          Tu Cotizacion ha sido enviada con Exito
        </h1>

        {/* Termo */}
        <div className="mx-auto flex max-w-5xl gap-8 justify-center">
          <div className="flex flex-col items-center rounded-xl bg-white/10 p-8">
            <Image
              src="/SEND.jpg"
              alt=""
              width={150}
              height={100}
              className="rounded-full"
            />
            <h4 className="text-xl font-bold uppercase">En proceso....</h4>
            <Link href="/">
              <button className="rounded-full bg-slate-500 px-8 py-2.5">
                Regresar a Inicio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriaCotizacion;
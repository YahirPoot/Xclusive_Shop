import React from 'react';

import CustomButton from './CustomButton';
import Cotizar from '@/app/Components/Cotizar';

type Props = {};

const Hero = () => {
  return (
    <div className="hero relative z-0 mx-auto flex max-w-[1440px] flex-col gap-5 xl:flex-row">
      <div className="padding-x flex-1 pt-36">
        <h1 className="hero__title text-[50px] font-extrabold sm:text-[64px] 2xl:text-[72px]">
          Exprésate a través del diseño!
        </h1>

        <p className="hero__subtitle text-black-100 mt-5 text-[27px] font-light">
          "La verdadera magia comienza cuando diseñas tu propio estilo en cada
          pieza!"
        </p>

        {/* <CustomButton /> */}
        <div className="mt-7 flex items-center space-x-10">
          <Cotizar
            params={{
              slug: '',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from 'react';
import RegistroCotizacion from './registroCotizacion';
import HomeCotizar from './MoodCotizar/homeCotizar';
import NavBar from '../Components/nav/NavBar';

type Props = {};

const page = () => {
  return (
    // <div>
    //   <NavBar />
    //   <main className="mx-auto grid min-h-screen w-full place-items-center bg-gradient-to-r from-[#c8bdba] to-[#a49d9b]">
    //     <HomeCotizar />
    //   </main>
    // </div>

    <RegistroCotizacion
      params={{
        slug: '',
      }}
     />
  );
};

export default page;

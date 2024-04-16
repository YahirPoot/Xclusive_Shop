import React from 'react';
import RegistroCotizacion from './registroCotizacion';
import HomeCotizar from './MoodCotizar/homeCotizar';
import NavBar from '../Components/nav/NavBar';
import CategoriaCotizacion from './CategoriaCotizacion';

type Props = {};

const page = () => {
  return (
    <div>
      <NavBar />
      <CategoriaCotizacion />
    </div>

    // <RegistroCotizacion
    //   params={{
    //     slug: '',
    //   }}
    //  />
  );
};

export default page;

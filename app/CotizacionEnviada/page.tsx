import React from 'react';

import NavBar from '../Components/nav/NavBar';
import CategoriaCotizacion from './CotizacionEnviada';

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

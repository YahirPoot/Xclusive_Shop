import Link from 'next/link';
import React from 'react';
import Filter from './Filter';
import Item from './Item';
import Catalogo from '../Catalogo/Catalogo';
type Props = {};

const Container = (props: Props) => {
  return (
    <div>
      <div className="flex">
        <Link href="/filters" className="opacity-60">
          <div>
            
            </div>
        </Link>
        <div className="px-20">
        <Filter />
          <Catalogo />
        </div>
      </div>
    </div>
  );
};

export default Container;

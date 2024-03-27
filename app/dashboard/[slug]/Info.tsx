'use client';
import React, { useState } from 'react';
import ReactStars from 'react-rating-star-with-type';
import { FaRegCommentDots } from 'react-icons/fa';
import { CiShoppingCart, CiCreditCard1 } from 'react-icons/ci';
import { SlTag } from 'react-icons/sl';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { PiCubeFocusThin } from 'react-icons/pi';
import { AiTwotoneEdit } from 'react-icons/ai';
import Link from 'next/link';
// import { useSession } from 'next-auth/react';
import { Product } from '@/app/api/Product/product';
// import { SessionProvider } from 'next-auth/react';
import { title } from 'process';
import AddCart from '@/app/Components/AddCart';
import Cotizar from '@/app/Components/Cotizar';

const Info: React.FC<Product> = ({
  nombreProd,
  descripcion,
  idProducto,
  precioUnitario,
  color,
  tamaño,
}) => {
  // const colors = color.split(',');
  // const sizes = tamaño.split(',');
  //   const { data: session } = useSession();
  //   let currentUserId = null;
  //     if (session) {
  //         currentUserId = session.user.id;
  //     }

  const [selectSizes, setSelectedSizes] = useState<string[]>([]);

  const handleSelectSize = (size: string) => {
    if (selectSizes.includes(size)) {
      setSelectedSizes((prevState: string[]) =>
        prevState.filter((item) => item !== size),
      );
    } else {
      setSelectedSizes((prevState: string[]) => [...prevState, size]);
    }
  };
  return (
    <div className="info relative">
      <h1 className="text-2xl font-semibold">{nombreProd}</h1>
      <h3 className="text-2xl text-neutral-500">${precioUnitario}</h3>
      <div className="mt-4 flex items-center space-x-12">
        <ReactStars value={5} size={20} />
        <span className="flex items-start space-x-3">
          <FaRegCommentDots size={22} />
          <span className="text-sm opacity-70">121 comments</span>
        </span>
      </div>
      <h3 className="mb-3 mt-8 font-medium text-[14]">Select Size</h3>
      {/* <ul className="flex space-x-5">
        {sizes.map((size, index) => (
          <li
            key={index}
            onClick={() => handleSelectSize(size)}
            className={`inline-block cursor-pointer rounded-lg border-[1px] p-1 px-2 text-center
                ${
                  selectSizes.includes(size)
                    ? 'bg-black text-white'
                    : 'bg-white text-black'
                }
                `}
          >
            {size}
          </li>
        ))}
      </ul> */}
      <h3 className="mb-3 mt-8 font-medium text-[14]">Colores disponibles:</h3>
      {/* {colors.map((color, index) => ( */}
        <div
          // key={index}
          className="relative m-1 h-[35px] w-[35px] border-[1px] border-neutral-400"
          style={{
            borderRadius: '100%',
            backgroundColor: color,
            display: 'inline-block',
          }}
        >
          <span
            className="absolute left-[50%] top-[50%] flex h-[30px] w-[30px] translate-x-[-50%] translate-y-[-50%] rounded-full border-[1px]"
            style={{ backgroundColor: color }}
          ></span>
        </div>
      ))
      {/* } */}
      <div className="mt-7 flex items-center space-x-10">
        <AddCart productId={idProducto} />
        <Cotizar params={{
          slug: ''
        }} />
      </div>
    </div>
  );
};

export default Info;

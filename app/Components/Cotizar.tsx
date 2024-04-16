// Page.tsx
'use client';
import { getById } from '@/app/api/Product/product';
import { useEffect, useState } from 'react';
import Navbar from '@/app/Components/navbar';
import { Product } from '@/models/types';
import ImageGallery from '@/app/dashboard/[slug]/ImageGallery';
import Info from '@/app/dashboard/[slug]/Info';
import Link from 'next/link';
import {FaEdit} from "react-icons/fa"

function Cotizar({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const productId = parseInt(params.slug, 10);
  

  useEffect(() => {
    getById(productId)
      .then((data) => setProduct(data))
      .catch((error) => setError(error));
  }, [productId]);

  // const urlString = product?.images;

  return (
    <div className="py-5: mx-auto max-w-[1280px] px-5">
        <Link href={`/Cotizar/`}>
            <div  className='flex items-center space-x-4 bg-purple-500 text-white  px-6 p-2 rounded-full cursor-pointer' >
                <span>
                    <FaEdit size={24} />
                </span>
                <span className='text-wm'> Cotizar</span>
            </div>                  
        </Link>
    </div>
  );
}

export default Cotizar;





{/* <div key={product.idProducto}>
                        
                    </div> */}
'use client';
import React, { useEffect, useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import Link from 'next/link';
import { Product } from '@/models/types';

type Props = {};

const apiUrl = 'http://www.xclusivedesigns.somee.com/api/Producto'; // Replace with your actual API URL

const Item = (props: Props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (isLoading) {
    return <div>Cargando Productos...</div>;
  }

  if (products.length > 0) {
    return (
      <div>
        <h1 className="py-3 text-xl">Productos</h1>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:gap-20 lg:grid-cols-3 ">
          {products.map(
            (product: Product) => (
              <div key={product.idProducto}>
                <Link href={`/dashboard/${product.idProducto}`}>
                  <div className="relative rounded-lg">
                    <img
                      src={product.images ? product.images[0] : ''} // Handle potential missing images
                      className="h-[300px] w-[250px] rounded-lg object-cover object-top"
                      alt=""
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <h1 className="max-w-[150px] overflow-hidden whitespace-nowrap text-[14px] font-medium">
                        {product.title}
                      </h1>
                      <p className="text-[13px] opacity-60">
                        {product.nombreProd}
                      </p>
                    </div>
                    <span className="rounded-lg bg-gray-100 px-2 font-medium">
                      ${product.precioUnitario}.00
                    </span>
                  </div>
                </Link>
              </div>
            ),
          )}
        </div>
      </div>
    );
  } else {
    // Handle empty data scenario (optional)
    return <div>No products found.</div>;
  }
};

export default Item;

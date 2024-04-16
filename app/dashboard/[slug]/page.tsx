// page.tsx
'use client'
import { getById } from '@/app/api/Product/product';
import { useEffect, useState } from 'react';
import ImageGallery from './ImageGallery';
import Info from './Info';
import Navbar from '@/app/Components/navbar';
import { Product, Image } from '@/models/types';

export default function Page({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const productId = parseInt(params.slug, 10);
    if (!isNaN(productId)) {
      getById(productId)

        .then((data) => setProduct(data))
        
        .catch((error) => setError(error));
    } else {
      setError(new Error("Invalid product ID"));
    }
  }, [params.slug]);

  // Mapea las imágenes de los productos y extrae las URL
  // const imageUrls = product?.images.map(image => image.urlImagenProducto) || [];
  const imageUrls = product?.images
  console.log('imageUrls')
  console.log(product?.images[0].urlImagenProducto)
  console.log(product)

  return (
    <div className="py-5 mx-auto max-w-[1280px] px-5">
      <Navbar />
      <hr />
      {error && <div>Error: {error.message}</div>}
      <hr />
      {product && (
        <div className='grid grid-cols-2 mt-10 gap-14'>
          <ImageGallery imageUrls={imageUrls} />
          <Info {...product} />
        </div>
      )}
    </div>
  );
}

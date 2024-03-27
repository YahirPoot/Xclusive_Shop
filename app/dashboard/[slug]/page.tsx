'use client';
import { getById } from '@/app/api/Product/product';
import { useEffect, useState } from 'react';
import ImageGallery from './ImageGallery';
import Info from './Info';
import Navbar from '@/app/Components/navbar';
import { Product } from '@/models/types';

export default function Page({ params }: { params: { slug: string } }) {
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
      <Navbar />
      <hr />
      {product && (
        <div className="mt-10 grid grid-cols-2 gap-14">
          <ImageGallery imageUrls={''} />

          <Info {...product} />
        </div>
      )}
    </div>
  );
}

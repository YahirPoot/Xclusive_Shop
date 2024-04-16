// ImageGallery.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { Image as imagen }  from '@/models/types';

interface ImageGalleryProps {
    imageUrls: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ imageUrls }) => {
    const [selectedImage, setSelectedImage] = useState<number>(0);

    return (
        <div className='images grid grid-cols-7'>
            <div className='all-images flex flex-col col-span-2 justify-center'>
                {imageUrls.map((url, index) => (
                    <div key={index} className='image relative rounded-lg'>
                        <Image
                            onClick={() => setSelectedImage(index)}
                            className={`w-auto h-auto rounded-lg mb-3 p-1 object-cover object-top ${
                                selectedImage === index ? 'border-[1px] border-purple-500' : 'border-[1px] border-purple-200'
                            }`}
                            src={url}
                            alt={`Image ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
            {imageUrls.length > 0 && (
                <div className='selected-image col-span-5'>
                    <img src={imageUrls[selectedImage]} className='h-[600px] w-auto object-cover object-top' alt='Selected Image' />
                </div>
            )}
        </div>
    );
};

export default ImageGallery;

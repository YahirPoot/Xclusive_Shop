'use client';
import React from 'react';
import Image1 from '../../Assets/taza1.jpg';
import Image2 from '../../Assets/playera3.jpg';
import Image3 from '../../Assets/gorra1.jpg';

const CustomButton = () => {
  return (
    <button className="mt-10 flex cursor-pointer items-center space-x-4  rounded-full bg-purple-500 p-2 px-6 text-white">
      <span className="flex-1">Cotiza Ya</span>
    </button>
  );
};

export default CustomButton;

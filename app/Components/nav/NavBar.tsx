'use client';
import { useState } from 'react';

type Props = {};
const NavBar = (props: Props) => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);
  return (
    <div>
      <div className="relative flex items-center justify-between py-4">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <div className="text-2xl font-semibold">
            <a href="/">XCLUSIVE SHOP</a>
          </div>
          <nav className="max-md:hidden">
            <ul className="flex items-center space-x-7 text-[15px] opacity-70 lg:space-x-10">
            <li><a href="/" className='py-3 inline-block w-full'>Shop</a></li>
            <li><a href="filters" className='py-3 inline-block w-full'>Filters</a></li>
            <li><a href="myproducts" className='py-3 inline-block w-full'>My Products</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default NavBar;

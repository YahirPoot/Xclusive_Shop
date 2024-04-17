  'use client';
// import { useState } from 'react';
import { auth } from '@/auth';
// import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { cookies } from 'next/headers';
import LongOut from './longOut';

type Props = {};
const NavBar = (props: Props) => {
  // const [showProfile, setShowProfile] = useState<boolean>(false);
  // const [showNav, setShowNav] = useState<boolean>(false);
  let name;
  let lastName;
  if (typeof window !== 'undefined') {
    name = localStorage.getItem('name');
    lastName = localStorage.getItem('lastName');
  }
  // const session = useSession();
  // console.log(session);
  return (
    <div>
      <div className="relative flex items-center justify-between py-4">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <div className="text-2xl font-semibold">
            <a href="/">XCLUSIVE SHOP</a>
          </div>
          <nav className="max-md:hidden">
            <ul className="flex items-center space-x-7 text-[15px] opacity-70 lg:space-x-10">
              <li>
                <a href="/" className="inline-block w-full py-3">
                  Shop
                </a>
              </li>
              <li>
                <a href="filters" className="inline-block w-full py-3">
                  Filters
                </a>
              </li>
              <li>
                <a href="myproducts" className="inline-block w-full py-3">
                  My Products
                </a>
              </li>
              <li>
                <p>{name}</p>
                <p>{lastName}</p>
              </li>
              
              {/* <Link href="/api/auth/signout"> */}
                <li>
                  <LongOut />
                </li>
              {/* </Link> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default NavBar;

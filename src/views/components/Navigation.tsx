// @/src/views/components/Navigation.tsx

import Link from 'next/link';

type NavLink = {
  label:string;
  href:string;
};

type Props = {
  navLinks:NavLink[];
};

const Navigation = ({ navLinks }:Props) => {


  return (
    <>
      {/*  */}
      {navLinks.map((link) => {


        return (
        //
          <Link
            key={link.label}
            href={link.href}
          >
            {/* текст або мітка посилання */}
            {link.label}
          </Link>
        );
      })}


      <Link href="/signin">SignIn</Link>

    </>
  );
};

export { Navigation };
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center m-4 w-fit cursor-pointer">
      <Link href="/">
        <div className="flex items-center">
        <img src="logo_capitech_2.png" height={63} width={63} alt="" />
        <p className="pl-2 font-semibold">Capitech Dictionary</p>
        </div>
      </Link>
    </div>
  );
};

export default Header;

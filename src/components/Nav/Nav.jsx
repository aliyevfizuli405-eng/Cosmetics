import { useState, useContext } from "react";
import { Link } from "react-router";
import { LogoLight } from "./Logo";

import { Search, Heart, User,ShoppingBasket } from "lucide-react";

import decorText from "@assets/main-text-decor.png"

export const Nav = () => {
  return (
    <nav className="fixed w-screen px-18 py-5 bg-[rgba(252,237,234,.9)] flex justify-between z-1000 ">
      <div className="nav__left hidden md:flex items-center">
        <div className="nav__logo mr-10">
          <Link to="/"><LogoLight /></Link>
        </div>
        <div className="nav__links flex ">
          <Link to="/" className="nav__link active:text-pink-400 p-5 relative  hover:text-pink-400 text-[14px]">
            Home
            <img src={decorText} alt="" className="absolute  z-0 top-5 left-[40%] w-8" />
          </Link>
          <Link className="nav__link active:text-pink-400 p-5 relative  hover:text-pink-400 text-[14px]">
            Pages
             <img src={decorText} alt="" className="absolute  z-0 top-5 left-[40%] w-8" />

          </Link>
          <Link className="nav__link active:text-pink-400 p-5 relative  hover:text-pink-400 text-[14px]">
            Shop
             <img src={decorText} alt="" className="absolute  z-0 top-5 left-[40%] w-8" />

          </Link>
          <Link className="nav__link active:text-pink-400 p-5 relative  hover:text-pink-400 text-[14px]">
            Categories
             <img src={decorText} alt="" className="absolute  z-0 top-3 left-[40%] w-12" />

          </Link>
          <Link className="nav__link active:text-pink-400 p-5 relative  hover:text-pink-400 text-[14px]">
            Blog
             <img src={decorText} alt="" className="absolute  z-0 top-5 left-[40%] w-8" />

          </Link>
          <Link className="nav__link active:text-pink-400 p-5 relative  hover:text-pink-400 text-[14px]">
            Contact
             <img src={decorText} alt="" className="absolute  z-0 top-5 left-[40%] w-8" />

          </Link>
        </div>
      </div>
      <div className="nav__right flex items-center gap-10 ">
        <button><Search/></button>
        <button><User/></button>
        <button><Heart/></button>
        <button><ShoppingBasket/></button>
      </div>
    </nav>
  );
};

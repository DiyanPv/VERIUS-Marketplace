import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { TransactionContext } from "../../../../context/context";
import logo from "../../../../images/logo.png";
import { Link } from "react-router-dom";

const NavBarItem = ({ title, classProps, url, path }) => {
  return (
    <li
      className={`mx-4 cursor-pointer${classProps} ${
        path === url ? `active` : ``
      }`}
    >
      <Link to={url}>{title} </Link>
    </li>
  );
};
export const NavBar = ({ setModalisOpen, modalisOpen }) => {
  const email = localStorage.getItem(`email`);
  const password = localStorage.getItem(`password`);
  const NavBarItems = [
    { title: `Market`, url: `/market` },
    { title: `Exchange`, url: `/exchange` },
    { title: `Wallet`, url: `/wallet` },
  ];
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.9] flex-initial justify-center">
        <Link to="/">
        <img
          src={logo}
          alt="No logo"
          className="w-52 h-48 cursor-pointer space-x-0"
        ></img>
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial gap-2">
        {NavBarItems.map((item, index) => (
          <NavBarItem
            key={item + index}
            title={item.title}
            url={item.url}
            path={window.location.pathname}
          />
        ))}
        {email && password ? (
          ``
        ) : (
          <li
            className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
            onClick={() => {
              console.log(`true`);
              setModalisOpen(!modalisOpen);
            }}
          >
            Login
          </li>
        )}
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => {
              setToggleMenu(false);
            }}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => {
              setToggleMenu(true);
            }}
          />
        )}
        {toggleMenu && (
          <ul className="z-10 fixed top-0 right-2 p-3 w-[70vw] h-screen shadow-2xl flex flex-col justify-start items-end rounder-md blue-glassmorphism gap-3">
            <li className="text-xl text-white w-full my-2">
              <AiOutlineClose
                onClick={() => {
                  setToggleMenu(false);
                }}
              />
            </li>
            {NavBarItems.map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item.title}
                classProps={"my-3 text-lg text-white"}
                url={item.url}
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

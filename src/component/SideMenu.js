import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { CgScreen, CgPlayButtonO } from "react-icons/cg";
import Background from "./Background";
import Button from "./Button";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="fixed left-0 top-0 bottom-0 bg-slate-200 text-gray-700 w-72 px-8 py-10 text-xl -translate-x-full hover:translate-x-0 ease-in-out duration-500"
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <h2 className="text-center text-2xl mb-8">Design Tool</h2>
      <ul className="flex flex-col gap-4">
        <li className="flex items-center cursor-pointer">
          <Link to={"/"}>
            <CgScreen className="mr-3" /> Background
          </Link>
        </li>
        <li className="flex items-center cursor-pointer">
          <Link to={"/button"}>
            <CgPlayButtonO className="mr-3" /> Button
          </Link>
        </li>
      </ul>
      {isOpen === true ? (
        <RiArrowLeftSLine className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full w-6 h-10 bg-gray-500 text-white" />
      ) : (
        <RiArrowRightSLine className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full w-6 h-10 bg-gray-500 text-white" />
      )}
    </div>
  );
};

export default SideMenu;

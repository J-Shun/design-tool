import { useState } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import { CgScreen } from "react-icons/cg";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="fixed left-0 top-0 bottom-0 bg-slate-200 text-gray-700 w-72 px-8 py-10 text-xl hover:translate-x-0 ease-in-out duration-500"
      onMouseEnter={() => {
        setIsOpen(true);
      }}
      onMouseLeave={() => {
        setIsOpen(false);
      }}
    >
      <h2 className="text-center mb-5">Design Tool</h2>
      <ul>
        <li className="flex items-center cursor-pointer">
          <CgScreen className="mr-3" /> Background
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

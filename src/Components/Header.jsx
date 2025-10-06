import { useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="w-full text-gray-900">
      {/* mobile */}
      <div className="flex items-center justify-around px-4 py-3 shadow-md">
        <div className="font-bold text-4xl"><Link to="/">MyStore.</Link></div>
        <div className="hidden md:flex">
          <ul className="flex items-center justify-center gap-7">
            <li className="text-xl font-normal cursor-pointer hover:text-gray-950 text-gray-600 transition-colors duration-300 hover:scale-[0.98]">
            <Link to="/">Home</Link>
            </li>
            <li className="text-xl font-normal cursor-pointer hover:text-gray-950 text-gray-600 transition-colors duration-300 hover:scale-[0.98]">
              About
            </li>
            <li className="text-xl font-normal cursor-pointer hover:text-gray-950 text-gray-600 transition-colors duration-300 hover:scale-[0.98]">
              Contact
            </li>
            <li className="text-xl font-normal cursor-pointer hover:text-gray-950 text-gray-600 transition-colors duration-300 hover:scale-[0.98]">
              Services
            </li>
            <li className="text-xl font-normal cursor-pointer hover:text-gray-950 text-gray-600 transition-colors duration-300 hover:scale-[0.98]">
              <Link to="/cart"><BsCart3 /></Link>
            </li>
            <li className="text-xl font-normal cursor-pointer hover:text-gray-950 text-gray-600 transition-colors duration-300 hover:scale-[0.98]">
              <MdOutlineAccountCircle />
            </li>
          </ul>
        </div>
        <button
          onClick={handleMenu}
          className="font-bold text-xl text-black md:hidden"
        >
          {isOpen ? <AiOutlineClose /> : <TfiMenu />}
        </button>
      </div>
      <div className="md:hidden">
        <ul
          className={`flex flex-col justify-center items-center gap-4 inset-0  p-8 ${
            isOpen ? "translate-x-[0%]" : "translate-x-[-500px]"
          }`}
        >
          <li className="text-xl font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="text-xl font-medium">
            About
          </li>
          <li className="text-xl font-medium">
            Contact
          </li>
          <li className="text-xl font-medium">
            Services
          </li>
          <li className="text-xl font-medium">
            <Link to="/cart"><BsCart3 /></Link>
          </li>
          <li className="text-xl font-medium">
            <MdOutlineAccountCircle />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

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
    <nav className="w-full text-gray-900 bg-white shadow-md relative z-50">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="font-bold text-3xl">
          <Link to="/">MyStore.</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-7">
            <li className="text-lg font-medium text-gray-600 hover:text-gray-900 transition">
              <Link to="/">Home</Link>
            </li>
            <li className="text-lg font-medium text-gray-600 hover:text-gray-900 transition cursor-pointer">
              About
            </li>
            <li className="text-lg font-medium text-gray-600 hover:text-gray-900 transition cursor-pointer">
              Contact
            </li>
            <li className="text-lg font-medium text-gray-600 hover:text-gray-900 transition cursor-pointer">
              Services
            </li>
            <li className="text-2xl text-gray-600 hover:text-gray-900 transition">
              <Link to="/cart">
                <BsCart3 />
              </Link>
            </li>
            <li className="text-2xl text-gray-600 hover:text-gray-900 transition cursor-pointer">
              <MdOutlineAccountCircle />
            </li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleMenu}
          className="md:hidden text-2xl text-gray-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <AiOutlineClose /> : <TfiMenu />}
        </button>
      </div>

      {/* Overlay (background darkening) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
          onClick={handleMenu}
        ></div>
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <div className="font-bold text-2xl">
            <Link to="/" onClick={() => setIsOpen(false)}>MyStore.</Link>
          </div>
          <button
            onClick={handleMenu}
            className="text-2xl text-gray-800 focus:outline-none"
          >
            <AiOutlineClose />
          </button>
        </div>

        <ul className="flex flex-col items-start gap-6 p-6">
          <li className="text-lg font-medium text-gray-700 hover:text-gray-900 transition">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="text-lg font-medium text-gray-700 hover:text-gray-900 transition cursor-pointer">
            About
          </li>
          <li className="text-lg font-medium text-gray-700 hover:text-gray-900 transition cursor-pointer">
            Contact
          </li>
          <li className="text-lg font-medium text-gray-700 hover:text-gray-900 transition cursor-pointer">
            Services
          </li>
          <li className="text-2xl text-gray-700 hover:text-gray-900 transition">
            <Link to="/cart" onClick={() => setIsOpen(false)}>
              <BsCart3 />
            </Link>
          </li>
          <li className="text-2xl text-gray-700 hover:text-gray-900 transition cursor-pointer">
            <MdOutlineAccountCircle />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

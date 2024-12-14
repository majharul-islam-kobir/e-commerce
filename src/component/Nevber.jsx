import { useState } from "react";
import { FaHome, FaInfoCircle, FaPhoneAlt, FaSearch, FaStore, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa"; 
import { Link } from "react-router";
import image from "../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../context";
import { useSelector } from "react-redux";

function Navber() {
  const { name } = useContext(AuthContext);
  console.log(name);

  const products = useSelector((state) => state.cart.products);

  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu on mobile

  return (
    <nav className="bg-white text-black p-4 shadow-md">
      <div className="flex justify-between items-center max-w-[1100px] mx-auto flex-wrap">
        {/* Logo Section */}
        <div className="flex-shrink-0 justify-center sm:justify-start">
          <Link to="/tshop" className="text-xl font-bold ">
            <img src={image} alt="logo" width={100} />
          </Link>
        </div>

        {/* Search Section */}
        <div className="relative w-full md:w-auto flex-grow md:flex-grow-0 mt-4 md:mt-0">
          <form className="flex justify-center md:justify-start">
            <input
              type="text"
              placeholder="Search Product"
              className="w-full md:w-[650px] px-2 py-3 border-2 rounded focus:outline-none"
            />
            <FaSearch className="absolute top-4 right-4 text-red-600" />
          </form>
        </div>

        {/* Right Section */}
        <div className="sm:flex items-center space-x-4 mt-4 md:mt-0 hidden ">
          <Link to="/cart" className="text-xl relative mr-3">
            <FaShoppingCart />
            {products.length > 0 && (
              <span className="px-[10px] py-1 bg-red-800 rounded-full text-sm absolute bottom-4 left-3">
                {products.length}
              </span>
            )}
          </Link>
          <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded">
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Navigation Links (Desktop) */}
      <div className="hidden  sm:flex justify-center items-center mt-4 flex-wrap space-y-2 md:space-y-0 md:flex-row">
        <Link to="/" className="mx-8 flex items-center space-x-2 font-semibold hover:underline">
          <FaHome className="text-xl" />
          <span>Home</span>
        </Link>
        <Link to="/shop" className="mx-8 flex items-center space-x-2 font-semibold hover:underline">
          <FaStore className="text-xl" />
          <span>Shop</span>
        </Link>
        <Link to="/contact" className="mx-8 flex items-center space-x-2 font-semibold hover:underline">
          <FaPhoneAlt className="text-xl" />
          <span>Contact</span>
        </Link>
        <Link to="/about" className="mx-8 flex items-center space-x-2 font-semibold hover:underline">
          <FaInfoCircle className="text-xl" />
          <span>About</span>
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex justify-between items-center w-full">
  {/* Menu Toggle Button */}
  <button className="text-xl" onClick={() => setMenuOpen(!menuOpen)}>
    {menuOpen ? <FaTimes /> : <FaBars />}
  </button>

  {/* Cart, Login, and Register Links */}
  <div className="flex items-center space-x-4 mt-5">
    <Link to="/cart" className="text-xl relative">
      <FaShoppingCart />
      {products.length > 0 && (
        <span className="px-[10px] py-1 bg-red-800 rounded-full text-sm absolute bottom-4 left-3">
          {products.length}
        </span>
      )}
    </Link>
    <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded">
      Login
    </Link>
    <Link
      to="/register"
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      Register
    </Link>
  </div>
</div>


      {/* Mobile Menu (only shown when menuOpen state is true) */}
      {menuOpen && (
        <div className="flex flex-col items-center mt-4 space-y-2 bg-gray-100 p-4 rounded-md">
          <Link to="/" className="flex items-center space-x-2 font-semibold hover:underline">
            <FaHome className="text-xl" />
            <span>Home</span>
          </Link>
          <Link to="/shop" className="flex items-center space-x-2 font-semibold hover:underline">
            <FaStore className="text-xl" />
            <span>Shop</span>
          </Link>
          <Link to="/contact" className="flex items-center space-x-2 font-semibold hover:underline">
            <FaPhoneAlt className="text-xl" />
            <span>Contact</span>
          </Link>
          <Link to="/about" className="flex items-center space-x-2 font-semibold hover:underline">
            <FaInfoCircle className="text-xl" />
            <span>About</span>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navber;

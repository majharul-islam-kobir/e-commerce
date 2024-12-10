import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router";
import image from "../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../context";

function Nevber() {
  const {name} = useContext(AuthContext)
  console.log(name);
  

  return (
    <nav className="bg-white text-black p-4 shadow-md">
      <div className="flex justify-between items-center max-w-[1100px] mx-auto flex-wrap">
        <div className="flex-shrink-0">
          <Link to="/tshop" className="text-xl font-bold">
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
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <Link to="/cart" className="text-xl">
            <FaCartShopping />
          </Link>
          <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded">
            Login 
          </Link>
          <Link to="/register" className="px-4 py-2 bg-blue-500 text-white rounded">
            Register 
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center items-center mt-4 flex-wrap space-y-2 md:space-y-0 md:flex-row">
        <Link to="/" className="mx-8 font-semibold hover:underline">
          Home
        </Link>
        <Link to="/shop" className="mx-8 font-semibold hover:underline">
          Shop
        </Link>
        <Link to="/contact" className="mx-8 font-semibold hover:underline">
          Contact
        </Link>
        <Link to="/about" className="mx-8 font-semibold hover:underline">
          About
        </Link>
      </div>
    </nav>
  );
}

export default Nevber;

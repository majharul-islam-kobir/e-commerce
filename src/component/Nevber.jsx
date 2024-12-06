import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router";
import image from "../assets/images/logo.png"

function Nevber() {
    return (
      <nav className="bg-white text-black p-4 shadow-md">
        <div className="flex justify-between items-center max-w-[1100px] mx-auto">
          <div>
            <Link to="/tshop" className="text-xl font-bold"><img src={image} alt="image" width={100} /></Link>
          </div>
          <div className="relative">
            <form className="">
              <input
                type="text"
                placeholder="Search Product"
                className="w-[650px] px-2 py-3 border-2 rounded focus:outline-none"
              />
              <FaSearch className="ml-2 absolute top-4 text-red-600 right-3" />
            </form>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/cart" className="text-xl">
              <FaCartShopping />
            </Link>
            <button className="px-4 py-2 bg-blue-500 text-white rounded">
              Login | Register
            </button>
          </div>
        </div>
        <div className=" flex justify-center items-center">
            <Link to="/" className="mx-8 mt-4 font-semibold hover:underline">Home</Link>
            <Link to="/shop" className="mx-8 mt-4 font-semibold hover:underline">Shop</Link>
            <Link to="/contact" className="mx-8 mt-4 font-semibold hover:underline">Contact</Link>
            <Link to="/about" className="mx-8 mt-4 font-semibold hover:underline">About</Link>
        </div>
      </nav>
    );
  }
  export default Nevber; 
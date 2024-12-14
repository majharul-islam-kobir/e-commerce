import React from "react";
import logo from "../assets/images/logo.png"; // আপনার লোগো ফাইলের পাথ

function T_Shop() {
  return (
    <div className="my-6 p-6 bg-white shadow-lg rounded-xl w-[90%] sm:w-[600px] mx-auto">
      <div className="flex flex-col items-center mb-4">
        <img
          src={logo}
          alt="Tauba-Shop Logo"
          className="w-32 h-32 mb-4 object-cover rounded-full border-4 border-red-600"
        />
        <h1 className="text-3xl font-extrabold text-gray-800 mb-2">Tauba-Shop</h1>
        <p className="text-gray-600 text-center mb-4 text-sm sm:text-base px-4 sm:px-0">
          Tauba-Shop is a top-tier e-commerce platform that excels in convenience and customer satisfaction.
          It offers a wide range of quality products, catering to diverse needs with an intuitive, user-friendly interface.
          Its secure payment options and dependable delivery make it a reliable choice, ensuring every shopping experience is seamless and enjoyable.
          Whether for essentials or unique finds, Tauba-Shop stands out as a trusted and efficient online shopping destination.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="flex justify-center space-x-4 mt-4">
        <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all duration-300 w-full sm:w-auto">
          Shop Now
        </button>
        <button className="border-2 border-red-600 text-red-600 px-6 py-2 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-300 w-full sm:w-auto">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default T_Shop;

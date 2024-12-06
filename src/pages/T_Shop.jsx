import React from "react";
import logo from "../assets/images/logo.png"; // আপনার লোগো ফাইলের পাথ

function T_Shop() {
  return (
    <div className="my-4 text-center w-[600px] mx-auto">
      <img src={logo} alt="Tauba-Shop Logo" className=" w-auto" />
      <h1 className="text-2xl font-bold text-gray-800 ml-3">Tauba-Shop</h1>
      <p >Tauba-Shop is a top-tier e-commerce platform that excels in convenience and customer satisfaction. It offers a wide range of quality products, catering to diverse needs with an intuitive, user-friendly interface. Its secure payment options and dependable delivery make it a reliable choice, ensuring every shopping experience is seamless and enjoyable. Whether for essentials or unique finds, Tauba-Shop stands out as a trusted and efficient online shopping destination</p>
    </div>
  );
}

export default T_Shop;

import React from 'react';
import MenCategory from "../assets/images/cart.png";
import WomenCategory from "../assets/images/cart2.png";
import KidsCategory from "../assets/images/cart-3.png";

const categorise = [
    {
        title: "Men",
        imageUrl: MenCategory,
        bgColor: "bg-red-500",
    },
    {
        title: "Women",
        imageUrl: WomenCategory,
        bgColor: "bg-green-500",
    },
    {
        title: "Kids",
        imageUrl: KidsCategory,
        bgColor: "bg-blue-500",
    },
];

function CategorySection() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  '>
       {categorise.map((category, index) => (
            <div key={index} className={`p-4 rounded ${category.bgColor} hover:scale-105 transition-all duration-500 ease-in-out flex justify-center items-center`}>
                 <div className='text-center mt-2'>
                    <p className='text-lg font-bold ml-10'>{category.title}</p>
                    <p className='text-sm text-gray-200 ml-10'>View All</p>
                </div>
                <img src={category.imageUrl} alt={category.title} className='w-32 h-32 mx-auto' />
               
            </div> 
       ))}
    </div>
  );
}

export default CategorySection;

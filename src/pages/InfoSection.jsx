import React from 'react';
import { FaHeadset, FaMoneyBillWave, FaShippingFast, FaLock, FaTag } from 'react-icons/fa';

const InfoSection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: 'Free Shipping',
      description: 'Get your orders delivered with no extra cost',
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: 'Support 24/7',
      description: 'We are here to assist you anytime',
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-red-600" />,
      title: '100% Money Back',
      description: 'Full refund if you are not satisfied',
    },
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: 'Secure Payment',
      description: 'Your transactions are safe with us',
    },
    {
      icon: <FaTag className="text-3xl text-red-600" />,
      title: 'Best Prices',
      description: 'Enjoy the best prices on the market',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-16 ">
      {infoItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center border shadow-md p-6 rounded-md hover:scale-105 transition-all duration-500 ease-in-out bg-white"
        >
          <div className="mb-3">{item.icon}</div>
          <h3 className="font-bold text-lg text-center">{item.title}</h3>
          <p className="text-sm text-gray-600 text-center">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoSection;

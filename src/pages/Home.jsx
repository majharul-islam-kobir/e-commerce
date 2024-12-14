import { cetegories } from "../assets/mokData"; // 'categories' বানানে ভুল ছিল, ঠিক করা হয়েছে।
import image from "../assets/images/banner.png";
import InfoSection from "./InfoSection";
import CategorySection from "../component/CategorySection";
import Products from "../component/Products"; // Products ভুলভাবে 'assets/data' থেকে ইমপোর্ট করা হয়েছে, এটি সম্ভবত একটি কম্পোনেন্ট।
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-12 gap-5 mb-[60px]">
        {/* Sidebar Section */}
        {/* Sidebar Section */}
        <div className="col-span-12 md:col-span-3 bg-white shadow-2xl mb-5 md:mb-0">
          <div className="bg-red-600 w-full items-center mb-5 p-2">
            <h1 className="font-bold text-white text-center md:text-left">
              SHOP BY CATEGORIES
            </h1>
          </div>
          <ul>
            {cetegories.map((category, index) => (
              <li key={index} className="flex items-center mb-3 p-1 ml-3">
                <div className="w-2 h-2 rounded-full border-2 border-red-600 mr-4"></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Banner Section */}
        {/* Banner Section */}
        <div className="col-span-12 md:col-span-9 bg-yellow-200">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-7">
            <div className="col-span-1 md:col-span-6 mt-28 ml-6 md:ml-20">
              <h3 className="text-neutral-400 mb-4">Kobir | Taqwa-Shop</h3>
              <h1 className="text-3xl font-bold mb-4">WELCOME TO TAQWA-SHOP</h1>
              <h2 className="text-2xl font-bold mb-4">MILLION+ PRODUCTS</h2>
              <button className="bg-red-700 px-6 py-2 text-white">
                SHOP NOW
              </button>
            </div>
            <div className="col-span-1 md:col-span-6">
              <img
                src={image}
                className="h-[450px] w-full object-cover"
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      {/* Additional Sections */}
      <InfoSection />
      <CategorySection />
      <Products />
      
    </div>
  );
}

export default Home;

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa"; 
function Shop() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/shop")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => setProducts(data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    if (products.length === 0) {
        return <p>Loading products...</p>;
    }

    return (
        <div>
            <h1 className="text-3xl mt-16 mb-8 font-bold text-center">SHOP</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border p-4 rounded hover:scale-105 transition-all duration-500 ease-in-out"
                    >
                        <img
                            src={product.image}
                            alt={product.title}
                            className="h-[100px] mx-auto"
                        />
                        <h2 className="text-lg font-bold">{product.title}</h2>
                        <p>Price: ${product.price}</p>
                        <p>
                            Rating: {product.rating.rate} ({product.rating.count}{" "}
                            reviews)
                        </p>
                        <div className="flex justify-center text-yellow-500">
                            {Array.from({
                                length: Math.floor(product.rating.rate),
                            }).map((_, index) => (
                                <FaStar key={index} />
                            ))}
                        </div>
                            
                        <div className="relative">
                            <div className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-300">
                                <span className="group-hover:hidden">+</span>
                                <span className="hidden group-hover:block">Add to Cart</span>
                            </div>
                   </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Shop;

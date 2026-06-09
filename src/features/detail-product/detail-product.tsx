import React from "react";
import type { Product } from "../../entities/home/models/types";
import { useNavigate } from "react-router-dom";


interface ProductViewProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onBuyNow?: (product: Product) => void;
}

export const ProductView: React.FC<ProductViewProps> = ({
  product,
  onAddToCart,
  onBuyNow,
}) => {
  const navigate = useNavigate()


  const specifications = [
    { label: "Brand", value: product.brand ?? "—" },
    { label: "Category", value: product.category ?? "—" },
    { label: "Rating", value: `${product.rating} / 5` },
    { label: "Stock", value: `${product.stock} items` },
  ];

  return (
 <div className="max-w-6xl mx-auto p-6 min-h-screen font-sans dark:bg-gray-950">
  <button
    onClick={() => navigate("/")}
    className="text-sm text-gray-600 hover:text-black mb-8 flex items-center gap-2 dark:text-gray-400 dark:hover:text-white"
  >
    ← Back to Home
  </button>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-100 dark:border-gray-800">
    
    <div className="flex justify-center items-center bg-[#f0ede8] dark:bg-gray-800 rounded-xl p-8 h-[500px]">
      <img
        src={product.images[0] || product.thumbnail}
        alt={product.title}
        className="object-contain h-full w-full max-w-md"
      />
    </div>

    <div className="flex flex-col h-full justify-between">
      <div>
        <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-xs px-3 py-1 rounded-full font-medium mb-4">
          + {product.category || "Chair"}
        </span>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {product.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
          {product.description}
        </p>

        <div className="border-t border-gray-100 dark:border-gray-800 divide-y divide-gray-100 dark:divide-gray-800 mb-8">
          {specifications.map((spec, index) => (
            <div key={index} className="flex justify-between py-4 text-sm">
              <span className="font-semibold text-gray-900 dark:text-white">
                {spec.label}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-auto">
        <button
          onClick={(e) => { e.stopPropagation(); onAddToCart?.(product) }}
          className="py-4 px-6 border border-gray-300 dark:border-gray-700 rounded-full text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-center"
        >
          Add to Cart
        </button>
        <button
          onClick={() => { onAddToCart?.(product); onBuyNow?.(product) }}
          className="py-4 px-6 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-black dark:hover:bg-gray-200 transition-colors text-center"
        >
          Buy Now ${product.price}
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

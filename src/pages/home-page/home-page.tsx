import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store/store";
import type { Product } from "../../entities/home/models/types";
import { useEffect } from "react";
import { getProducts } from "../../entities/home/api/home-api";

const HomePage = () => {
  const products = useSelector(
    (state: RootState) => state.home.data,
  ) as Product[];
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Products</h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="overflow-hidden rounded-xl bg-white shadow-md transition hover:shadow-xl"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="mb-2 text-xl font-semibold">{product.title}</h2>

              <p className="mb-4 line-clamp-3 text-sm text-gray-600">
                {product.description}
              </p>

              <div className="mb-3 flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">
                  ${product.price}
                </span>

                <span className="rounded bg-yellow-100 px-2 py-1 text-sm">
                  ⭐ {product.rating}
                </span>
              </div>

              <div className="mb-2 flex justify-between text-sm text-gray-500">
                <span>{product.category}</span>
                <span>Stock: {product.stock}</span>
              </div>

              {product.brand && (
                <p className="text-sm text-gray-700">
                  Brand: <span className="font-medium">{product.brand}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

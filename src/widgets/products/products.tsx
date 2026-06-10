"use client";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store/store";
import type { Product } from "../../entities/home/models/types";
import { getProducts } from "../../entities/home/api/home-api";
import Hero from "../../features/home/hero-section/hero";
import CategoryTabs from "../../features/home/category/category";
import ProductCard from "../../features/product-card/product-card";
import CardSkeleton from "../../features/home/skeleton/card-skeleton";
import ErrorMessage from "../../features/home/error-message/error-message";
import { Search } from "lucide-react";
import SortSelect from "../../features/home/sort-select/sort-select";

const Products = () => {
  const products = useSelector(
    (state: RootState) => state.home.data,
  ) as Product[];
  const { loading, error, sortBy, searchQuery } = useSelector(
    (state: RootState) => state.home,
  );
  const dispatch: AppDispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const visibleProducts = useMemo(() => {
    return products
      .filter((product) =>
        selectedCategory ? product.category === selectedCategory : true,
      )
      .filter((product) =>
        product.title.toLowerCase().includes(searchQuery),
      )
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        if (sortBy === "price-desc") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  if (loading)
    return (
      <div className="min-h-screen p-4 sm:p-8 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl space-y-6 sm:space-y-8">
          <Hero />
          <div className="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen p-4 sm:p-8 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl space-y-6 sm:space-y-8">
          <Hero />
          <ErrorMessage message={error} />
        </div>
      </div>
    );

  return (
    <div className="min-h-screen p-4 sm:p-8 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl space-y-6 sm:space-y-8">
        <Hero />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-2">
          <div className="w-full overflow-x-auto sm:flex-1 scrollbar-none">
            <CategoryTabs
              categories={products}
              onSelect={setSelectedCategory}
            />
          </div>
          <div className="w-full sm:w-auto sm:shrink-0">
            <SortSelect />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center py-16 sm:py-20 gap-3">
              <Search className="w-10 h-10 text-gray-400" />
              <p className="text-base sm:text-lg font-medium text-gray-700 dark:text-gray-300">
                Nothing found
              </p>
              <p className="text-sm text-gray-400 text-center px-4">
                Try a different category or search term.
              </p>
            </div>
          ) : (
            visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
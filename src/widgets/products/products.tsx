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
  const { loading, error, sortBy, searchQuery } = useSelector((state: RootState) => state.home);
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
      .filter((product) => product.title.toLowerCase().includes(searchQuery))
      .sort((a,b) => {
        if (sortBy === "price-asc") return a.price - b.price
        if (sortBy === "price-desc") return b.price - a.price
        if (sortBy === "rating") return b.rating - a.rating
        return 0
      })
  }, [products, selectedCategory, searchQuery, sortBy]);

  if (loading)
    return (
      <div className="min-h-screen p-8 dark:gray-950">
        <div className="mx-auto max-w-7xl space-y-8">
          <Hero />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen p-8 dark:gray-950">
        <div className="mx-auto max-w-7xl space-y-8">
          <Hero />
          <ErrorMessage message={error} />
        </div>
      </div>
    );

  return (
    <div className="min-h-screen p-8 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl space-y-8">
        <Hero />
        <div className="flex items-center gap-2">
          <CategoryTabs categories={products} onSelect={setSelectedCategory} />
          <SortSelect />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <Search className="text-4xl"></Search>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                Nothing found
              </p>
              <p className="text-sm text-gray-400">
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

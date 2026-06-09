"use client";

import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store/store";
import type { Product } from "../../entities/home/models/types";
import { getProducts } from "../../entities/home/api/home-api";
import Hero from "../../features/home/hero-section/hero";
import CategoryTabs from "../../features/home/category/category";
import ProductCard from "../../features/product-card/product-card";

const Products = () => {
  const products = useSelector(
    (state: RootState) => state.home.data,
  ) as Product[];
  const searchQuery = useSelector(
    (state: RootState) => state.home.searchQuery,
  ) as string;
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
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );
  }, [products, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen p-8 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl space-y-8">
        <Hero />

        <CategoryTabs categories={products} onSelect={setSelectedCategory} />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

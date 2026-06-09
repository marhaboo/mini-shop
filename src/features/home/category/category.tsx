import { useMemo, useState } from "react";
import type { Product } from "../../../entities/home/models/types";

interface CategoryTabsProps {
  categories: Product[];
  onSelect?: (category: string) => void;
}

const CategoryTabs = ({ categories, onSelect }: CategoryTabsProps) => {
  const uniqueCategories = useMemo(
    () => [...new Set(categories.map((p) => p.category))],
    [categories]
  );

  const [activeCategory, setActiveCategory] = useState(uniqueCategories[0] ?? "");

  const handleSelect = (category: string) => {
    setActiveCategory(category);
    onSelect?.(category);
  };

  return (
    <nav aria-label="Product categories" className="w-full  border-gray-200 dark:border-gray-700">
      <ul className="flex items-center gap-8 whitespace-nowrap px-2">
        {uniqueCategories.map((category) => (
          <li key={category}>
            <button
              onClick={() => handleSelect(category)}
              className={`relative -mb-px border-b-2 py-4 text-base capitalize transition-colors ${
                category === activeCategory
                  ? "border-black dark:border-white font-semibold text-black dark:text-white"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryTabs;
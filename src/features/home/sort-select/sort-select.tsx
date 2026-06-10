import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  ChevronDown,
  SlidersHorizontal,
  ArrowUpNarrowWide,
  ArrowDownWideNarrow,
  Sparkles,
} from "lucide-react";
import type { AppDispatch } from "../../../app/store/store";
import { setSort } from "../../../entities/home/reducers/homeSlice";

const options = [
  { value: "default", label: "По умолчанию", icon: SlidersHorizontal },
  { value: "price-asc", label: "Цена", icon: ArrowUpNarrowWide },
  { value: "price-desc", label: "Цена", icon: ArrowDownWideNarrow },
  { value: "rating", label: "Рейтинг", icon: Sparkles },
];

const SortSelect = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);

  const handleSelect = (option: (typeof options)[0]) => {
    setSelected(option);
    dispatch(setSort(option.value));
    setIsOpen(false);
  };

  const Icon = selected.icon;

  return (
    <div className="relative w-52 text-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-2 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-2.5 text-gray-900 dark:text-gray-100"
      >
        <span className="flex items-center gap-2">
          <Icon className="h-4 w-4" />
          {selected.label}
        </span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 p-1 shadow-lg">
          {options.map((option) => {
            const OptionIcon = option.icon;
            return (
              <button
                key={option.value}
                onClick={() => handleSelect(option)}
                className={`flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left transition-colors
                  ${
                    selected.value === option.value
                      ? "bg-gray-100 dark:bg-gray-900 font-semibold"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900"
                  }`}
              >
                <OptionIcon className="h-4 w-4" />
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SortSelect;

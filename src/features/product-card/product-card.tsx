"use client"

import { Heart, ShoppingBag, Star } from "lucide-react"
import type { Product } from "../../entities/home/models/types"
import { useNavigate } from "react-router-dom"


interface ProductCardProps {
  product: Product
  isFavorite?: boolean
  onToggleFavorite?: (id: number) => void
  onBuyNow?: (id: number) => void
  onDetails?: (id: number) => void
}


const ProductCard = ({
  product,
  isFavorite = false,
  onToggleFavorite,
  onBuyNow,
  onDetails,
}: ProductCardProps) => {
  const navigate = useNavigate()
  const reviewCount = product.reviews?.length ?? 0

  return (
    <div 
    onClick={() => navigate(`/product/${product.id}`)}
    className="w-full max-w-xs">
      <div className="relative rounded-3xl bg-gray-100 p-5 dark:bg-gray-800">
        <button
          type="button"
          onClick={() => onToggleFavorite?.(product.id)}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={isFavorite}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-sm transition-transform hover:scale-105 dark:bg-gray-900 dark:text-white"
        >
          <Heart
            className="h-5 w-5"
            fill={isFavorite ? "currentColor" : "none"}
          />
        </button>

        <div className="flex h-56 items-center justify-center">
          <img
            src={product.thumbnail || "/placeholder.svg"}
            alt={product.title}
            crossOrigin="anonymous"
            className="max-h-full max-w-full object-contain mix-blend-multiply dark:mix-blend-normal"
          />
        </div>

        <div className="mt-4 flex items-center gap-3">
          <button
            type="button"
            onClick={() => onBuyNow?.(product.id)}
            className="flex flex-1 items-center justify-between rounded-full bg-white px-5 py-3 text-sm font-medium text-black shadow-sm transition-colors hover:bg-gray-50 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700"
          >
            <span>Buy Now</span>
            <ShoppingBag className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </button>
          <span className="rounded-full bg-black px-6 py-3 text-sm font-semibold text-white dark:bg-white dark:text-black">
            {"$"}
            {product.price.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="mt-4 px-1">
        <h3 className="text-lg font-semibold text-black dark:text-white">
          {product.title}
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.round(product.rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold text-black dark:text-white">
                {"("}
                {reviewCount}
                {")"}
              </span>{" "}
              Reviews
            </span>
          </div>
          <button
            type="button"
            onClick={() => onDetails?.(product.id)}
            className="text-sm font-medium text-black underline underline-offset-4 dark:text-white"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

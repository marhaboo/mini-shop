import { ShoppingCart, Search, Flower2 } from "lucide-react"
import { ThemeToggle } from "../theme/theme-toggle"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-5 sm:pt-5">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 rounded-2xl bg-foreground px-4 text-background shadow-lg sm:gap-6 sm:px-7">
        <a href="/" className="flex shrink-0 items-center gap-2">
          <Flower2 className="size-6 text-background" aria-hidden="true" />
          <span className="font-serif text-2xl font-medium italic tracking-tight">MiniShop</span>
        </a>


        <div className="relative hidden flex-1 sm:block sm:max-w-md">
          <Search
            className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-background/50"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search Product.."
            aria-label="Search products"
            className="w-full rounded-full bg-background/10 py-2.5 pl-11 pr-4 text-sm text-background placeholder:text-background/50 outline-none transition-shadow focus:ring-2 focus:ring-background/30"
          />
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          <button
            type="button"
            aria-label="Shopping cart"
            className="relative flex size-9 items-center justify-center text-background transition-opacity hover:opacity-70"
          >
            <ShoppingCart className="size-5" aria-hidden="true" />
            <span className="absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
              2
            </span>
          </button>

          <span className="h-6 w-px bg-background/20" aria-hidden="true" />

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header

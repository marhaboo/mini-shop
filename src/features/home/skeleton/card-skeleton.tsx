const CardSkeleton = () => {
  return (
    <div className="w-full max-w-xs animate-pulse">
      <div className="rounded-3xl bg-gray-200 dark:bg-gray-800 p-5">
        <div className="h-56 rounded-2xl bg-gray-300 dark:bg-gray-700" />
        <div className="mt-4 flex items-center gap-3">
          <div className="h-11 flex-1 rounded-full bg-gray-300 dark:bg-gray-700" />
          <div className="h-11 w-20 rounded-full bg-gray-300 dark:bg-gray-700" />
        </div>
      </div>
      <div className="mt-4 px-1 space-y-2">
        <div className="h-5 w-3/4 rounded bg-gray-200 dark:bg-gray-800" />
        <div className="h-4 w-1/2 rounded bg-gray-200 dark:bg-gray-800" />
      </div>
    </div>
  )
}

export default CardSkeleton
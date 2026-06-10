import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black font-sans px-4 transition-colors duration-300 dark:bg-gray-950 dark:text-white">
      <h1 className="text-[12rem] sm:text-[16rem] font-light tracking-tighter leading-none select-none text-[#1a1a1a] dark:text-[#f5f5f5]">
        404
      </h1>
      <p className="text-sm uppercase tracking-[0.2em] text-neutral-500 font-medium mb-12 dark:text-neutral-400">
        Page Not Found
      </p>
      <button 
        onClick={() => navigate("/")}
        className="px-6 py-3 text-xs uppercase tracking-widest font-semibold border border-black bg-black text-white hover:bg-neutral-800 transition-colors duration-200 shadow-lg dark:border-none dark:bg-white dark:text-black dark:hover:bg-neutral-200"
      >
        Back to Home
      </button>
      
    </div>
  )
}

export default NotFound
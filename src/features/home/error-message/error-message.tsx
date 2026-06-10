import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../app/store/store";
import { getProducts } from "../../../entities/home/api/home-api";
import { TriangleAlert } from "lucide-react";

const ErrorMessage = ({ message }: { message: string }) => {
  const dispatch: AppDispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center py-20 gap-4">
      <TriangleAlert className="text-4xl"></TriangleAlert>
      <p className="text-lg font-medium text-red-500">{message}</p>
      <button
        className="px-6 py-2 rounded-full bg-black text-white dark:bg-white dark:bg-black"
        onClick={() => dispatch(getProducts())}
      >
        Try again
      </button>
    </div>
  );
};

export default ErrorMessage;

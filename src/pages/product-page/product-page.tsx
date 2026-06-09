import { useParams } from "react-router-dom";
import type { AppDispatch, RootState } from "../../app/store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../entities/home/api/home-api";
import { ProductView } from "../../features/detail-product/detail-product";

const ProductPage = () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const products = useSelector((state: RootState) => state.home.data);

  const product = products.find((p) => p.id === Number(id));

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (!product) return <div>Product not found</div>;
  return (
    <div className="w-full dark:bg-gray-950">
      <ProductView product={product} />
    </div>
  );
};

export default ProductPage;

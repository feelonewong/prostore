import React from "react";
import ProductCard from "@/components/shared/product/product-card";
import { Product } from "@/type";

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit: number;
}) => {
  const sliceProductData = data.slice(0, limit);
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {sliceProductData.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sliceProductData.map((product: Product) => {
            return <ProductCard product={product} key={product.slug} />;
          })}
        </div>
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;

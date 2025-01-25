import React from "react";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const Homepage = async () => {
  const products = await getLatestProducts();
  return (
    <>
      <ProductList limit={4} data={products} title="Newest Arrivals" />
    </>
  );
};

export default Homepage;

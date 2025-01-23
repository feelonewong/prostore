import React from "react";
import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const Homepage = async () => {
  await delay(1000);
  return (
    <>
      <ProductList data={sampleData.products} title="Newest Arrivals" />
    </>
  );
};

export default Homepage;

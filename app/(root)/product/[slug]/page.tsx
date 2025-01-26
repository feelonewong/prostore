import React from "react";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";
import ProductPrice from "@/components/shared/product/product-price";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProductImage from "@/components/shared/product/product-image";
const ProductDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      {/*  Images Column */}
      <div className="col-span-2">
        {/*  Image Component*/}
        <ProductImage images={product.images} />
      </div>
      <div className="col-span-2 p-5">
        <div className="flex flex-col gap-6">
          <p>
            {product.brand} / {product.category}
          </p>
          <h1 className="h3-bold">{product.name}</h1>
          <p>
            {product.rating} of {product.numReviews} Reviews
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <ProductPrice
              value={Number(product.price)}
              className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
            />
          </div>
        </div>
        <div className="mt-10">
          <p className="font-semibold">Description</p>
          <p>{product.description}</p>
        </div>
      </div>
      <div className="col-span-1">
        {/*  Action column */}
        <Card>
          <CardContent className="p-4">
            <div className="flex mb-2 justify-between">
              <div>Price</div>
              <div>
                <ProductPrice value={Number(product.price)} />
              </div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              {product.stock > 0 ? (
                <Badge variant="outline">In Stock</Badge>
              ) : (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
            </div>
            {product.stock > 0 && (
              <Button className="w-full mt-2">
                <Plus />
                Add to cart
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetailPage;

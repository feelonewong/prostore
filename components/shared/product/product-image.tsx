"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const ProductImage = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        key={images[current]}
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
        alt="Image"
        priority={true}
      />

      <div className="flex gap-2">
        {images.map((image, index) => (
          <Image
            src={image}
            key={index}
            alt="product image"
            width={100}
            height={100}
            priority={true}
            onClick={() => setCurrent(index)}
            className={cn(
              "border cursor-pointer rounded-sm hover:border-orange-600",
              current === index && "border-orange-500",
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductImage;

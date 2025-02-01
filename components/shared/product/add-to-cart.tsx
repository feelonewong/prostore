"use client";
import React from "react";
import { CartItem } from "@/type";
import { Button } from "@/components/ui/button";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();
  const { toast } = useToast();

  const handleAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast({
        variant: "destructive",
        description: res.message,
      });
      return;
    }
    toast({
      description: `${item.name} add to cart`,
      action: (
        <ToastAction
          altText="Go to Cart"
          onClick={() => router.push("/cart")}
          className="bg-primary text-white hover:bg-gray-800"
        ></ToastAction>
      ),
    });
  };
  return (
    <Button className="w-full" type="button" onClick={handleAddToCart}>
      <Plus />
      Add To Cart
    </Button>
  );
};

export default AddToCart;

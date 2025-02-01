"use server";
import { CartItem } from "@/type";

export const addItemToCart = async (data: CartItem) => {
  return {
    success: true,
    message: `Item added to cart`,
  };
};

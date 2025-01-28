export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Pro Store";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "A modern ecommerce platform built with Next.js application";
export const SERVER_URL = process.env.SERVER_URL || "http://localhost:3000";
export const LATEST_PRODUCT_LIMIT = process.env.LATEST_PRODUCT_LIMIT || 4;
export const signInDefaultValues = {
  email: "",
  password: "",
};
export const signUpDefaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

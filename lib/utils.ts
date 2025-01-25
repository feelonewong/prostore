import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToPlainObject<T>(inputs: T): T {
  return JSON.parse(JSON.stringify(inputs));
}

export function formatNumberWithDecimal(num: number): string {
  const [int, decimal] = num.toString().split(".");
  if (decimal) {
    return `${int}.${decimal.padEnd(2, "0")}`;
  } else {
    return `${int}.00`;
  }
}

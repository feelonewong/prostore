import { PrismaClient } from "@prisma/client";
import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCT_LIMIT } from "@/lib/constants";

export async function getLatestProducts() {
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: Number(LATEST_PRODUCT_LIMIT),
    orderBy: {
      createdAt: "desc",
    },
  });
  return convertToPlainObject(data);
}

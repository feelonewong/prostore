import { convertToPlainObject } from "@/lib/utils";
import { LATEST_PRODUCT_LIMIT } from "@/lib/constants";
import { prisma } from "@/db/prisma";

export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: Number(LATEST_PRODUCT_LIMIT),
    orderBy: {
      createdAt: "desc",
    },
  });
  return convertToPlainObject(data);
}

export async function getProductBySlug(slug: string) {
  const data = await prisma.product.findFirst({
    where: { slug },
  });
  return data;
}

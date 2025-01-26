import { PrismaClient } from "@prisma/client";
import sampleData from "@/db/sample-data";
async function main() {
  const prisma = new PrismaClient();
  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  // 生成产品数据的种子文件
  await prisma.product.createMany({ data: sampleData.products });

  // 生成用户表的种子文件
  await prisma.user.createMany({ data: sampleData.users });
  console.log("Database seeded successfully.");
}

main();

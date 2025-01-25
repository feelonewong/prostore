import { Pool, neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";
import ws from "ws";

// 设置WebSocket连接，使Neon能够使用WebSocket通信.
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

// 使用提供的连接字符串创建一个新的连接池，允许多个并发连接.
const pool = new Pool({ connectionString });

// 使用 Neon 连接池实例化 Prisma 适配器，以处理 Prisma 和 Neon 之间的连接.
const adapter = new PrismaNeon(pool);

// 使用自定义结果转换器扩展 PrismaClient，将价格和评级字段转换为字符串。
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute(product) {
          return product.price.toString();
        },
      },
      rating: {
        compute(product) {
          return product.rating.toString();
        },
      },
    },
  },
});

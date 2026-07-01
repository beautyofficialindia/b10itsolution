import { PrismaClient } from "../generated/prisma/client";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";

// Initialize the connection pool using your connection string
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Bind the pool to the Prisma adapter
const adapter = new PrismaPg(pool);

// Standard Next.js singleton setup
const globalForPrisma = globalThis as unknown as { 
  prisma: PrismaClient | undefined 
};

export const prisma =
  // Pass the adapter as an argument!
  globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
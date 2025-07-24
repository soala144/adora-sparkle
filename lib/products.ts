// lib/products.ts
'use server';
import { db } from './db';
import { products } from './db/schema';
import { eq } from 'drizzle-orm';

// Fetch all products
export async function getAllProducts() {
  return await db.select().from(products);
}

// Add a new product
export async function addProduct(product) {
  return await db.insert(products).values(product).returning();
}

// Update a product
export async function updateProduct(id, updates) {
  return await db.update(products).set(updates).where(eq(products.id, id)).returning();
}

// Get product by ID
export async function getProductById(id) {
  return await db.select().from(products).where(eq(products.id, id));
}

// Get products by category
export async function getProductsByCategory(category) {
  return await db.select().from(products).where(eq(products.category, category));
}

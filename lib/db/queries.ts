import db from './db';
import { 
  users, 
  newsletter, 
  products, 
  orders, 
  orderItems,
  roleEnum,
  orderStatusEnum,
  deliveryZoneEnum
} from './schema';
import { eq, and, inArray, like, desc, asc, isNull, not, or, lt, gt, gte, lte } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';
import { SQL, sql } from 'drizzle-orm';
import { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

// User queries
export async function getUserById(id: string) {
  const result = await db.select().from(users).where(eq(users.id, id));
  return result[0] || null;
}

export async function getUserByEmail(email: string) {
  const result = await db.select().from(users).where(eq(users.email, email));
  return result[0] || null;
}

export async function createUser(userData: {
  email: string;
  password: string;
  name: string;
  role?: 'USER' | 'ADMIN';
  subscribed?: boolean;
}) {
  const result = await db.insert(users).values({
    id: uuidv4(),
    email: userData.email,
    password: userData.password,
    name: userData.name,
    role: userData.role,
    subscribed: userData.subscribed,
    createdAt: new Date(),
    updatedAt: new Date(),
  }).returning();
  
  return result[0];
}

export async function updateUser(id: string, userData: Partial<{
  email: string;
  password: string;
  name: string;
  role: 'USER' | 'ADMIN';
  subscribed: boolean;
}>) {
  const updateData: any = { ...userData, updatedAt: new Date() };
  
  const result = await db.update(users)
    .set(updateData)
    .where(eq(users.id, id))
    .returning();
  
  return result[0];
}

export async function deleteUser(id: string) {
  return db.delete(users).where(eq(users.id, id));
}

export async function listUsers(options?: {
  limit?: number;
  offset?: number;
  orderBy?: keyof typeof users.$inferSelect;
  order?: 'asc' | 'desc';
  role?: 'USER' | 'ADMIN';
  subscribed?: boolean;
  search?: string;
}) {
  const { limit = 50, offset = 0, orderBy = 'createdAt', order = 'desc', role, subscribed, search } = options || {};
  
  const conditions: SQL<unknown>[] = [];
  
  if (role) {
    conditions.push(eq(users.role, role));
  }
  
  if (subscribed !== undefined) {
    conditions.push(eq(users.subscribed, subscribed));
  }
  
  if (search) {
    conditions.push(
      or(
        like(users.name, `%${search}%`),
        like(users.email, `%${search}%`)
      ) as SQL<unknown>
    );
  }
  
  // Handle ordering
  let orderByClause;
  if (orderBy === 'name') {
    orderByClause = order === 'asc' ? asc(users.name) : desc(users.name);
  } else if (orderBy === 'email') {
    orderByClause = order === 'asc' ? asc(users.email) : desc(users.email);
  } else if (orderBy === 'createdAt') {
    orderByClause = order === 'asc' ? asc(users.createdAt) : desc(users.createdAt);
  } else if (orderBy === 'updatedAt') {
    orderByClause = order === 'asc' ? asc(users.updatedAt) : desc(users.updatedAt);
  } else {
    orderByClause = order === 'asc' ? asc(users.createdAt) : desc(users.createdAt);
  }
  
  if (conditions.length > 0) {
    return db.select()
      .from(users)
      .where(and(...conditions))
      .orderBy(orderByClause)
      .limit(limit)
      .offset(offset);
  } else {
    return db.select()
      .from(users)
      .orderBy(orderByClause)
      .limit(limit)
      .offset(offset);
  }
}

export async function countUsers(options?: {
  role?: 'USER' | 'ADMIN';
  subscribed?: boolean;
  search?: string;
}) {
  const { role, subscribed, search } = options || {};
  
  const conditions: SQL<unknown>[] = [];
  
  if (role) {
    conditions.push(eq(users.role, role));
  }
  
  if (subscribed !== undefined) {
    conditions.push(eq(users.subscribed, subscribed));
  }
  
  if (search) {
    conditions.push(
      or(
        like(users.name, `%${search}%`),
        like(users.email, `%${search}%`)
      ) as SQL<unknown>
    );
  }
  
  let result;
  if (conditions.length > 0) {
    result = await db.select({ count: sql<number>`count(*)` })
      .from(users)
      .where(and(...conditions));
  } else {
    result = await db.select({ count: sql<number>`count(*)` })
      .from(users);
  }
  
  return result[0]?.count || 0;
}

// Newsletter queries
export async function subscribeToNewsletter(email: string) {
  try {
    const result = await db.insert(newsletter).values({
      id: uuidv4(),
      email,
      createdAt: new Date(),
    }).returning();
    
    return result[0];
  } catch (error) {
    // Handle unique constraint violation
    if ((error as any)?.code === '23505') {
      return { error: 'Email already subscribed' };
    }
    throw error;
  }
}

export async function unsubscribeFromNewsletter(email: string) {
  return db.delete(newsletter).where(eq(newsletter.email, email));
}

export async function listNewsletterSubscribers(options?: {
  limit?: number;
  offset?: number;
  orderBy?: 'email' | 'createdAt';
  order?: 'asc' | 'desc';
}) {
  const { limit = 100, offset = 0, orderBy = 'createdAt', order = 'desc' } = options || {};
  
  // Create the order by clause
  let orderByClause;
  if (orderBy === 'email') {
    orderByClause = order === 'asc' ? asc(newsletter.email) : desc(newsletter.email);
  } else {
    orderByClause = order === 'asc' ? asc(newsletter.createdAt) : desc(newsletter.createdAt);
  }
  
  return db.select()
    .from(newsletter)
    .orderBy(orderByClause)
    .limit(limit)
    .offset(offset);
}

export async function countNewsletterSubscribers() {
  const result = await db.select({ count: sql<number>`count(*)` }).from(newsletter);
  return result[0]?.count || 0;
}

// Product queries
export async function getProductById(id: string) {
  const result = await db.select().from(products).where(eq(products.id, id));
  return result[0] || null;
}

export async function createProduct(productData: {
  name: string;
  description: string;
  price: number | string;
  sizes: string[];
  colors: string[];
  stock: number;
  images: string[];
  isHidden?: boolean;
}) {
  // Convert price to string for numeric column
  const price = typeof productData.price === 'number' ? productData.price.toString() : productData.price;
  
  const result = await db.insert(products).values({
    id: uuidv4(),
    name: productData.name,
    description: productData.description,
    price,
    sizes: productData.sizes,
    colors: productData.colors,
    stock: productData.stock,
    images: productData.images,
    isHidden: productData.isHidden,
    createdAt: new Date(),
    updatedAt: new Date(),
  }).returning();
  
  return result[0];
}

export async function updateProduct(id: string, productData: Partial<{
  name: string;
  description: string;
  price: number | string;
  sizes: string[];
  colors: string[];
  stock: number;
  images: string[];
  isHidden: boolean;
}>) {
  // Convert price to string for numeric column if it exists
  const updateData: any = { ...productData, updatedAt: new Date() };
  if (typeof updateData.price === 'number') {
    updateData.price = updateData.price.toString();
  }
  
  const result = await db.update(products)
    .set(updateData)
    .where(eq(products.id, id))
    .returning();
  
  return result[0];
}

export async function deleteProduct(id: string) {
  return db.delete(products).where(eq(products.id, id));
}

export async function listProducts(options?: {
  limit?: number;
  offset?: number;
  orderBy?: keyof typeof products.$inferSelect;
  order?: 'asc' | 'desc';
  showHidden?: boolean;
  search?: string;
  minPrice?: number | string;
  maxPrice?: number | string;
}) {
  const { 
    limit = 50, 
    offset = 0, 
    orderBy = 'createdAt', 
    order = 'desc', 
    showHidden = false,
    search,
    minPrice,
    maxPrice
  } = options || {};
  
  const conditions: SQL<unknown>[] = [];
  
  if (!showHidden) {
    conditions.push(eq(products.isHidden, false));
  }
  
  if (search) {
    conditions.push(
      or(
        like(products.name, `%${search}%`),
        like(products.description, `%${search}%`)
      ) as SQL<unknown>
    );
  }
  
  if (minPrice !== undefined) {
    // Convert to string for numeric comparison
    const minPriceStr = typeof minPrice === 'number' ? minPrice.toString() : minPrice;
    conditions.push(gte(products.price, minPriceStr));
  }
  
  if (maxPrice !== undefined) {
    // Convert to string for numeric comparison
    const maxPriceStr = typeof maxPrice === 'number' ? maxPrice.toString() : maxPrice;
    conditions.push(lte(products.price, maxPriceStr));
  }
  
  // Handle ordering
  let orderByClause;
  if (orderBy === 'name') {
    orderByClause = order === 'asc' ? asc(products.name) : desc(products.name);
  } else if (orderBy === 'price') {
    orderByClause = order === 'asc' ? asc(products.price) : desc(products.price);
  } else if (orderBy === 'createdAt') {
    orderByClause = order === 'asc' ? asc(products.createdAt) : desc(products.createdAt);
  } else if (orderBy === 'stock') {
    orderByClause = order === 'asc' ? asc(products.stock) : desc(products.stock);
  } else {
    orderByClause = order === 'asc' ? asc(products.createdAt) : desc(products.createdAt);
  }
  
  if (conditions.length > 0) {
    return db.select()
      .from(products)
      .where(and(...conditions))
      .orderBy(orderByClause)
      .limit(limit)
      .offset(offset);
  } else {
    return db.select()
      .from(products)
      .orderBy(orderByClause)
      .limit(limit)
      .offset(offset);
  }
}

export async function countProducts(options?: {
  showHidden?: boolean;
  search?: string;
  minPrice?: number | string;
  maxPrice?: number | string;
}) {
  const { showHidden = false, search, minPrice, maxPrice } = options || {};
  
  const conditions: SQL<unknown>[] = [];
  
  if (!showHidden) {
    conditions.push(eq(products.isHidden, false));
  }
  
  if (search) {
    conditions.push(
      or(
        like(products.name, `%${search}%`),
        like(products.description, `%${search}%`)
      ) as SQL<unknown>
    );
  }
  
  if (minPrice !== undefined) {
    // Convert to string for numeric comparison
    const minPriceStr = typeof minPrice === 'number' ? minPrice.toString() : minPrice;
    conditions.push(gte(products.price, minPriceStr));
  }
  
  if (maxPrice !== undefined) {
    // Convert to string for numeric comparison
    const maxPriceStr = typeof maxPrice === 'number' ? maxPrice.toString() : maxPrice;
    conditions.push(lte(products.price, maxPriceStr));
  }
  
  let result;
  if (conditions.length > 0) {
    result = await db.select({ count: sql<number>`count(*)` })
      .from(products)
      .where(and(...conditions));
  } else {
    result = await db.select({ count: sql<number>`count(*)` })
      .from(products);
  }
  
  return result[0]?.count || 0;
}

export async function updateProductStock(id: string, stockChange: number) {
  const product = await getProductById(id);
  if (!product) {
    throw new Error('Product not found');
  }
  
  const newStock = Math.max(0, product.stock + stockChange);
  
  return updateProduct(id, { stock: newStock });
}

// Order queries
export async function getOrderById(id: string, includeItems: boolean = false) {
  const orderResult = await db.select().from(orders).where(eq(orders.id, id));
  const order = orderResult[0];
  
  if (!order) return null;
  
  if (includeItems) {
    const items = await db.select({
      item: orderItems,
      product: products
    })
    .from(orderItems)
    .leftJoin(products, eq(orderItems.productId, products.id))
    .where(eq(orderItems.orderId, id));
    
    return {
      ...order,
      items: items.map(({ item, product }: { item: any; product: any }) => ({
        ...item,
        product
      }))
    };
  }
  
  return order;
}

export async function createOrder(orderData: {
  userId: string;
  deliveryZone: 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';
  totalAmount: number | string;
  status?: 'PENDING' | 'PAID' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  paymentIntent?: string;
  items: Array<{
    productId: string;
    quantity: number;
    size: string;
    color: string;
    unitPrice: number | string;
  }>;
}) {
  // Convert numeric values to strings
  const totalAmount = typeof orderData.totalAmount === 'number' 
    ? orderData.totalAmount.toString() 
    : orderData.totalAmount;
  
  // Start a transaction
  return db.transaction(async (tx: PostgresJsDatabase) => {
    // 1. Create the order
    const orderId = uuidv4();
    const orderResult = await tx.insert(orders).values({
      id: orderId,
      userId: orderData.userId,
      deliveryZone: orderData.deliveryZone,
      totalAmount,
      status: orderData.status || 'PENDING',
      paymentIntent: orderData.paymentIntent,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).returning();
    
    // 2. Create the order items
    const orderItemsData = orderData.items.map(item => ({
      id: uuidv4(),
      orderId,
      productId: item.productId,
      quantity: item.quantity,
      size: item.size,
      color: item.color,
      unitPrice: typeof item.unitPrice === 'number' ? item.unitPrice.toString() : item.unitPrice
    }));
    
    for (const item of orderItemsData) {
      await tx.insert(orderItems).values(item);
    }
    
    // 3. Update the product stock
    for (const item of orderData.items) {
      const product = await tx.select().from(products).where(eq(products.id, item.productId));
      if (product[0]) {
        const newStock = Math.max(0, product[0].stock - item.quantity);
        await tx.update(products)
          .set({ stock: newStock, updatedAt: new Date() })
          .where(eq(products.id, item.productId));
      }
    }
    
    return orderResult[0];
  });
}

export async function updateOrderStatus(id: string, status: 'PENDING' | 'PAID' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED', emailSent?: boolean) {
  const updateData: any = {
    status,
    updatedAt: new Date()
  };
  
  if (emailSent !== undefined) {
    updateData.emailSent = emailSent;
  }
  
  const result = await db.update(orders)
    .set(updateData)
    .where(eq(orders.id, id))
    .returning();
  
  return result[0];
}

export async function deleteOrder(id: string) {
  return db.transaction(async (tx: PostgresJsDatabase) => {
    // First get the order items to restore stock
    const items = await tx.select().from(orderItems).where(eq(orderItems.orderId, id));
    
    // Restore stock for each product
    for (const item of items) {
      const product = await tx.select().from(products).where(eq(products.id, item.productId));
      if (product[0]) {
        await tx.update(products)
          .set({ 
            stock: product[0].stock + item.quantity,
            updatedAt: new Date() 
          })
          .where(eq(products.id, item.productId));
      }
    }
    
    // Delete order items
    await tx.delete(orderItems).where(eq(orderItems.orderId, id));
    
    // Delete the order
    return tx.delete(orders).where(eq(orders.id, id));
  });
}

export async function listOrders(options?: {
  limit?: number;
  offset?: number;
  orderBy?: keyof typeof orders.$inferSelect;
  order?: 'asc' | 'desc';
  userId?: string;
  status?: 'PENDING' | 'PAID' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  deliveryZone?: 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';
  dateFrom?: Date;
  dateTo?: Date;
  includeUser?: boolean;
}) {
  const { 
    limit = 50, 
    offset = 0, 
    orderBy = 'createdAt', 
    order = 'desc',
    userId,
    status,
    deliveryZone,
    dateFrom,
    dateTo,
    includeUser = false
  } = options || {};
  
  const conditions: SQL<unknown>[] = [];
  
  if (userId) {
    conditions.push(eq(orders.userId, userId));
  }
  
  if (status) {
    conditions.push(eq(orders.status, status));
  }
  
  if (deliveryZone) {
    conditions.push(eq(orders.deliveryZone, deliveryZone));
  }
  
  if (dateFrom) {
    conditions.push(gte(orders.createdAt, dateFrom));
  }
  
  if (dateTo) {
    conditions.push(lte(orders.createdAt, dateTo));
  }
  
  // Handle ordering
  let orderByClause;
  if (orderBy === 'createdAt') {
    orderByClause = order === 'asc' ? asc(orders.createdAt) : desc(orders.createdAt);
  } else if (orderBy === 'updatedAt') {
    orderByClause = order === 'asc' ? asc(orders.updatedAt) : desc(orders.updatedAt);
  } else if (orderBy === 'totalAmount') {
    orderByClause = order === 'asc' ? asc(orders.totalAmount) : desc(orders.totalAmount);
  } else if (orderBy === 'status') {
    orderByClause = order === 'asc' ? asc(orders.status) : desc(orders.status);
  } else {
    orderByClause = order === 'asc' ? asc(orders.createdAt) : desc(orders.createdAt);
  }
  
  if (includeUser) {
    if (conditions.length > 0) {
      return db.select({
          order: orders,
          user: users
        })
        .from(orders)
        .leftJoin(users, eq(orders.userId, users.id))
        .where(and(...conditions))
        .orderBy(orderByClause)
        .limit(limit)
        .offset(offset);
    } else {
      return db.select({
          order: orders,
          user: users
        })
        .from(orders)
        .leftJoin(users, eq(orders.userId, users.id))
        .orderBy(orderByClause)
        .limit(limit)
        .offset(offset);
    }
  } else {
    if (conditions.length > 0) {
      return db.select()
        .from(orders)
        .where(and(...conditions))
        .orderBy(orderByClause)
        .limit(limit)
        .offset(offset);
    } else {
      return db.select()
        .from(orders)
        .orderBy(orderByClause)
        .limit(limit)
        .offset(offset);
    }
  }
}

export async function countOrders(options?: {
  userId?: string;
  status?: 'PENDING' | 'PAID' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
  deliveryZone?: 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';
  dateFrom?: Date;
  dateTo?: Date;
}) {
  const { userId, status, deliveryZone, dateFrom, dateTo } = options || {};
  
  const conditions: SQL<unknown>[] = [];
  
  if (userId) {
    conditions.push(eq(orders.userId, userId));
  }
  
  if (status) {
    conditions.push(eq(orders.status, status));
  }
  
  if (deliveryZone) {
    conditions.push(eq(orders.deliveryZone, deliveryZone));
  }
  
  if (dateFrom) {
    conditions.push(gte(orders.createdAt, dateFrom));
  }
  
  if (dateTo) {
    conditions.push(lte(orders.createdAt, dateTo));
  }
  
  let result;
  if (conditions.length > 0) {
    result = await db.select({ count: sql<number>`count(*)` })
      .from(orders)
      .where(and(...conditions));
  } else {
    result = await db.select({ count: sql<number>`count(*)` })
      .from(orders);
  }
  
  return result[0]?.count || 0;
}

export async function getOrderItemsByOrderId(orderId: string) {
  return db.select({
    item: orderItems,
    product: products
  })
  .from(orderItems)
  .leftJoin(products, eq(orderItems.productId, products.id))
  .where(eq(orderItems.orderId, orderId));
}

// Dashboard Analytics
export async function getDashboardStats() {
  const [
    totalUsers,
    totalProducts,
    totalOrders,
    totalRevenue,
    recentOrders,
    lowStockProducts
  ] = await Promise.all([
    countUsers(),
    countProducts(),
    countOrders(),
    getTotalRevenue(),
    listOrders({ limit: 5, includeUser: true }),
    getLowStockProducts(5)
  ]);
  
  return {
    totalUsers,
    totalProducts,
    totalOrders,
    totalRevenue,
    recentOrders,
    lowStockProducts
  };
}

export async function getTotalRevenue() {
  const result = await db
    .select({ sum: sql<string>`sum(total_amount)` })
    .from(orders)
    .where(eq(orders.status, 'PAID'));
  
  return parseFloat(result[0]?.sum || '0');
}

export async function getRevenueByTimeRange(from: Date, to: Date) {
  const result = await db
    .select({ sum: sql<string>`sum(total_amount)` })
    .from(orders)
    .where(
      and(
        eq(orders.status, 'PAID'),
        gte(orders.createdAt, from),
        lte(orders.createdAt, to)
      )
    );
  
  return parseFloat(result[0]?.sum || '0');
}

export async function getOrderCountByStatus() {
  const result = await db
    .select({
      status: orders.status,
      count: sql<number>`count(*)`
    })
    .from(orders)
    .groupBy(orders.status);
  
  return result;
}

export async function getLowStockProducts(limit: number = 10) {
  return db
    .select()
    .from(products)
    .where(lt(products.stock, 10))
    .orderBy(asc(products.stock))
    .limit(limit);
}
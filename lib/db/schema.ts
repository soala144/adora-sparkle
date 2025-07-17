// schema.ts
import {
    pgTable,
    uuid,
    text,
    varchar,
    timestamp,
    boolean,
    integer,
    json,
    pgEnum,
    primaryKey,
    unique,
    serial
  } from 'drizzle-orm/pg-core';
import { numeric } from 'drizzle-orm/pg-core';
  
  export const roleEnum = pgEnum('role', ['USER', 'ADMIN']);
  export const orderStatusEnum = pgEnum('order_status', ['PENDING', 'PAID', 'SHIPPED', 'DELIVERED', 'CANCELLED']);
  export const deliveryZoneEnum = pgEnum('delivery_zone', ['NORTH', 'SOUTH', 'EAST', 'WEST']);
  
  // Users
  export const users = pgTable('users', {
    id: uuid('id').defaultRandom().primaryKey(),
    email: varchar('email', { length: 255 }).unique().notNull(),
    password: varchar('password', { length: 255 }),
    name: varchar('name', { length: 255 }).notNull(),
    role: roleEnum('role').default('USER').notNull(),
    subscribed: boolean('subscribed').default(false),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  });
  
  
  export const newsletter = pgTable('newsletter', {
    id: uuid('id').defaultRandom().primaryKey(),
    email: varchar('email', { length: 255 }).unique().notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  });
  

  export const products = pgTable('products', {
    id: uuid('id').defaultRandom().primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    description: text('description').notNull(),
    price: numeric('price').notNull(),
    sizes: json('sizes').$type<string[]>().notNull(), // e.g., ["S", "M"]
    colors: json('colors').$type<string[]>().notNull(), // e.g., ["red", "blue"]
    stock: integer('stock').notNull(),
    images: json('images').$type<string[]>().notNull(),
    isHidden: boolean('is_hidden').default(false).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  });
  
  export const orders = pgTable('orders', {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
    status: orderStatusEnum('status').default('PENDING').notNull(),
    deliveryZone: deliveryZoneEnum('delivery_zone').notNull(),
    totalAmount: numeric('total_amount').notNull(),
    emailSent: boolean('email_sent').default(false),
    paymentIntent: varchar('payment_intent', { length: 255 }),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  });
  
  export const orderItems = pgTable('order_items', {
    id: uuid('id').defaultRandom().primaryKey(),
    orderId: uuid('order_id').notNull().references(() => orders.id, { onDelete: 'cascade' }),
    productId: uuid('product_id').notNull().references(() => products.id, { onDelete: 'cascade' }),
    quantity: integer('quantity').notNull(),
    size: varchar('size', { length: 50 }).notNull(),
    color: varchar('color', { length: 50 }).notNull(),
    unitPrice: numeric('unit_price').notNull(), 
  });
  
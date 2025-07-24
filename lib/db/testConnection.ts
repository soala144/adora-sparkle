const { drizzle } = require('drizzle-orm/postgres-js');
const postgres = require('postgres');

const connectionString = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? process.env.NEXT_PUBLIC_SUPABASE_URL.replace('https://', 'postgres://') + ':5432/postgres'
  : '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!connectionString || !supabaseKey) {
  console.error('Missing Supabase credentials.');
  process.exit(1);
}

// You may need to adjust the connection string to include user/password if RLS is not enabled for anon key
const sql = postgres({
  host: process.env.NEXT_PUBLIC_SUPABASE_URL?.replace('https://', ''),
  port: 5432,
  database: 'postgres',
  username: 'postgres', // Default for Supabase
  password: supabaseKey, // This may not work if RLS is enabled; for admin use service_role key
  ssl: 'require',
});

const db = drizzle(sql);

async function testConnection() {
  try {
    const result = await db.execute('SELECT 1 as result');
    console.log('Database connection successful:', result);
    process.exit(0);
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
}

testConnection();

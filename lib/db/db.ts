import postgres from 'postgres'
import { drizzle } from 'drizzle-orm/postgres-js'
import { config } from 'dotenv'

config({
    path: '.env'
})
const client = postgres(process.env.POSTGRES_URL!, { prepare: false });
const db = drizzle(client)

export default db
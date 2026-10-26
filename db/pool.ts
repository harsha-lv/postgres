import "dotenv/config";
import { Pool, type PoolConfig } from "pg";

const connectionString = process.env.DATABASE_URL || process.env.DB_URL;

const connectionConfig: PoolConfig = connectionString
  ? { connectionString }
  : {
      host:
        process.env.PGHOST ||
        process.env.DB_HOST ||
        "/var/run/postgresql",
      user: process.env.PGUSER || process.env.DB_USER || "harsha",
      database:
        process.env.PGDATABASE ||
        process.env.DB_NAME ||
        process.env.DB_DATABASE ||
        "top_users",
      password: process.env.PGPASSWORD || process.env.DB_PASSWORD,
      port: Number(process.env.PGPORT || process.env.DB_PORT) || 5432,
    };

const pool = new Pool(connectionConfig);

export default pool;


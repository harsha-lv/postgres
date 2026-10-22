import { Pool } from "pg";

const connectionConfig = process.env.DATABASE_URL
  ? { connectionString: process.env.DATABASE_URL }
  : {
      host: process.env.PGHOST || "/var/run/postgresql",
      user: process.env.PGUSER || "harsha",
      database: process.env.PGDATABASE || "top_users",
      password: process.env.PGPASSWORD,
      port: Number(process.env.PGPORT) || 5432,
    };

const pool = new Pool(connectionConfig);

export default pool;

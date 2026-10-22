const { Pool } = require("pg");

const connectionConfig = process.env.DATABASE_URL
  ? { connectionString: process.env.DATABASE_URL }
  : {
      host: process.env.PGHOST || "/var/run/postgresql",
      user: process.env.PGUSER || "harsha",
      database: process.env.PGDATABASE || "top_users",
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT || 5432
    };

module.exports = new Pool(connectionConfig);

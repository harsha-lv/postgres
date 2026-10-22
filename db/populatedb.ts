#! /usr/bin/env node

import pool from "./pool";

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main(): Promise<void> {
  console.log("Seeding database...");

  try {
    await pool.query(SQL);
    console.log("Database seeded.");
  } finally {
    await pool.end();
  }
}

main().catch((error: unknown) => {
  console.error("Failed to seed database:", error);
  process.exitCode = 1;
});

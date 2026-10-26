import pool from "./pool";

export interface User {
  id: number;
  username: string | null;
}

export async function getAllUsernames(search?: string): Promise<User[]> {
  const trimmed = typeof search === "string" ? search.trim() : "";
  if (trimmed) {
    return searchUsernames(trimmed);
  }
  const { rows } = await pool.query<User>("SELECT * FROM usernames");
  return rows;
}

export async function searchUsernames(search: string): Promise<User[]> {
  const { rows } = await pool.query<User>(
    "SELECT * FROM usernames WHERE username ILIKE $1",
    [`%${search}%`],
  );
  return rows;
}

export async function insertUsername(username: string): Promise<void> {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

export async function deleteAllUsernames(): Promise<void> {
  await pool.query("DELETE FROM usernames");
}

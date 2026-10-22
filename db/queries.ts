import pool from "./pool";

export interface User {
  id: number;
  username: string | null;
}

export async function getAllUsernames(search = ""): Promise<User[]> {
  const { rows } = search
    ? await pool.query<User>(
        "SELECT * FROM usernames WHERE username ILIKE $1",
        [`%${search}%`],
      )
    : await pool.query<User>("SELECT * FROM usernames");
  return rows;
}

export async function insertUsername(username: string): Promise<void> {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

export async function deleteAllUsernames(): Promise<void> {
  await pool.query("DELETE FROM usernames");
}

import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

const dbPath = path.resolve("db", "dua_main.sqlite");

export const getDb = async () => {
  try {
    const db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    console.log("Connected to SQLite db");
    return db;
  } catch (error) {
    console.error("Error connecting to SQLite db:", error);
    throw error;
  }
};

export default getDb;

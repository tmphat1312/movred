import { consola } from "consola";
import { InferInsertModel } from "drizzle-orm";
import { readFileSync } from "fs";
// import { chain } from "stream-chain";
// import { parser } from "stream-json";
// import { streamArray } from "stream-json/streamers/StreamArray";

import { db } from "./db";
import { trending_movies } from "./schema";

const __dirname = new URL(".", import.meta.url).pathname;

(async function main() {
  console.log(__dirname);
  await importTrendingMoviesFromJson(
    `${__dirname}/__data__/trending_by_week.json`,
    "week",
  );
  await importTrendingMoviesFromJson(
    `${__dirname}/__data__/trending_by_day.json`,
    "day",
  );
})().catch(console.log);

export async function importTrendingMoviesFromJson(
  jsonFilePath: string,
  time_window: "week" | "day",
) {
  consola.start(`Porting data from ${jsonFilePath} to database...`);

  const movies = JSON.parse(readFileSync(jsonFilePath, "utf-8"));

  try {
    await db.insert(trending_movies).values(
      movies.map((movie: InferInsertModel<typeof trending_movies>) => ({
        ...movie,
        time_window,
      })),
    );
    consola.success("Data imported successfully");
  } catch (error) {
    consola.error("Error while importing data, tracings: \n", error);
  }
}

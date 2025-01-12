import { consola } from "consola";
import { InferInsertModel } from "drizzle-orm";
import { readFileSync } from "fs";
// import { chain } from "stream-chain";
// import { parser } from "stream-json";
// import { streamArray } from "stream-json/streamers/StreamArray";

import { db } from "./db";
import { latest_trailers, trending_movies } from "./schema";

const __dirname = new URL(".", import.meta.url).pathname;

(async function main() {
  // await importTrendingMoviesFromJson(
  //   `${__dirname}/__data__/trending_by_week.json`,
  //   "week",
  // );
  // await importTrendingMoviesFromJson(
  //   `${__dirname}/__data__/trending_by_day.json`,
  //   "day",
  // );
  // await importArrayValuesFromJson<InferInsertModel<typeof upcoming_movies>>({
  //   jsonFilePath: `${__dirname}/__data__/upcoming_movies.json`,
  //   importFn: async (values) => {
  //     await db.insert(upcoming_movies).values(values);
  //   },
  // });
  await importArrayValuesFromJson<InferInsertModel<typeof latest_trailers>>({
    jsonFilePath: `${__dirname}/__data__/latest_trailers.json`,
    importFn: async (values) => {
      await db.insert(latest_trailers).values(values);
    },
  });
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

export async function importArrayValuesFromJson<T>({
  jsonFilePath,
  importFn,
}: {
  jsonFilePath: string;
  importFn: (values: T[]) => Promise<void>;
}) {
  try {
    consola.start(`Porting data from ${jsonFilePath} to database...`);
    const values = JSON.parse(readFileSync(jsonFilePath, "utf-8"));

    await importFn(values);

    consola.success("Data imported successfully");
  } catch (error) {
    consola.error("Error while importing data, tracings: \n", error);
  }
}

import { consola } from "consola";
import { InferInsertModel } from "drizzle-orm";
import { readFileSync } from "fs";

import { db } from "./db";
import {
  genres,
  latest_trailers,
  popular_movies,
  trending_movies,
  upcoming_movies,
} from "./schema";

const __dirname = new URL(".", import.meta.url).pathname;

(async function main() {
  await importArrayValuesFromJson<InferInsertModel<typeof trending_movies>>({
    jsonFilePath: `${__dirname}/__data__/trending_movies.json`,
    importFn: async (values) => {
      await db.insert(trending_movies).values(values);
    },
  });
  await importArrayValuesFromJson<InferInsertModel<typeof upcoming_movies>>({
    jsonFilePath: `${__dirname}/__data__/upcoming_movies.json`,
    importFn: async (values) => {
      await db.insert(upcoming_movies).values(values);
    },
  });
  await importArrayValuesFromJson<InferInsertModel<typeof latest_trailers>>({
    jsonFilePath: `${__dirname}/__data__/latest_trailers.json`,
    importFn: async (values) => {
      await db.insert(latest_trailers).values(values);
    },
  });
  await importArrayValuesFromJson<InferInsertModel<typeof popular_movies>>({
    jsonFilePath: `${__dirname}/__data__/popular_movies.json`,
    importFn: async (values) => {
      await db.insert(popular_movies).values(values);
    },
  });
  await importArrayValuesFromJson<InferInsertModel<typeof genres>>({
    jsonFilePath: `${__dirname}/__data__/movie_genres.json`,
    importFn: async (values) => {
      await db.insert(genres).values(values);
    },
  });
})().catch(console.log);

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

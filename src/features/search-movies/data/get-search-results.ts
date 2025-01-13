import { and, asc, count, desc, gte, like, lte, or } from "drizzle-orm";

import { db } from "@/data/db";
import { movies } from "@/data/schema";
import { apiClient } from "@/lib/api-client";

type Options = {
  query: string;
  page?: number;
  sort_by?:
    | `popularity.desc`
    | `popularity.asc`
    | `release_date.desc`
    | `release_date.asc`
    | `vote_average.desc`
    | `vote_average.asc`
    | `title.asc`
    | `title.desc`;
  year?: number;
  from_score?: number;
  to_score?: number;
};

type ReturnType = {
  page: number;
  results: {
    id: number;
    poster_path: string | null;
    title: string;
    release_date: string | null;
    overview: string | null;
  }[];
  total_pages: number;
};

export async function v1({
  query,
  page = 1,
  sort_by = "popularity.desc",
  year,
  from_score = 0,
  to_score = 10,
}: Options) {
  if (!query) {
    return {
      page: 1,
      results: [],
      total_pages: 0,
      total_results: 0,
    };
  }

  const params = new URLSearchParams({
    page: page.toString(),
    query,
    sort_by,
    "vote_average.gte": from_score.toString(),
    "vote_average.lte": to_score.toString(),
  });

  if (year && year > 0) {
    params.set("year", year.toString());
  }

  console.log(params.toString());
  const response = await apiClient.get(`/search/movie?${params}`);

  return response.data;
}

export async function v2({
  query,
  sort_by = "popularity.desc",
  page = 1,
  year,
  from_score = 0,
  to_score = 10,
}: Options): Promise<ReturnType> {
  if (!query) {
    return {
      page: 1,
      total_pages: 0,
      results: [],
    };
  }

  // = Sort
  const [sortProp, sortOrder] = sort_by.split(".");
  const sortFn = sortOrder === "asc" ? asc : desc;

  // = Pagination
  const limitValue = 10;
  const offsetValue = (page - 1) * limitValue;

  // = Condition
  const textCondition = or(
    like(movies.title, `%${query}%`),
    like(movies.overview, `%${query}%`),
  );
  const yearCondition =
    year && year > 0 ? like(movies.release_date, `${year}-%%-%%`) : undefined;
  const scoreCondition = and(
    gte(movies.vote_average, from_score),
    lte(movies.vote_average, to_score),
  );
  const condition = and(textCondition, yearCondition, scoreCondition);

  const results = await db
    .select({
      id: movies.id,
      title: movies.title,
      overview: movies.overview,
      release_date: movies.release_date,
      poster_path: movies.poster_path,
    })
    .from(movies)
    .where(condition)
    // @ts-expect-error orderBy is typed correctly
    .orderBy(sortFn(movies[sortProp]))
    .limit(limitValue)
    .offset(offsetValue);
  const totalResults = await db
    .select({
      count: count(),
    })
    .from(movies)
    .where(condition);

  const totalPages = Math.ceil(totalResults[0].count / limitValue);
  return {
    page,
    total_pages: totalPages,
    results,
  };
}

export const getSearchResults = v2;

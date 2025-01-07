import { apiClient } from "@/lib/apiClient";

async function getMovieTrailer({ id }: { id: number }) {
  const response = await apiClient.get(`/movie/${id}/videos`);
  return response.data.results[0];
}

export async function getLatestTrailers() {
  const response = await apiClient.get("/movie/upcoming");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const upComingResults = response.data.results as any[];

  const trailerPromises = await Promise.all(
    upComingResults.map(getMovieTrailer),
  );

  const latestTrailers = upComingResults
    .map((movie, index) => {
      const trailer = trailerPromises[index];
      return trailer
        ? {
            ...trailer,
            ...movie,
          }
        : null;
    })
    .filter(Boolean);

  return latestTrailers;
}

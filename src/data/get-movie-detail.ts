import { authenticatedApiClient } from "@/lib/apiClient";

type Options = {
	movie_id: number;
};

export async function getMovieDetail({ movie_id }: Options) {
	const response = await authenticatedApiClient.get(`/movie/${movie_id}`);

	return response.data;
}

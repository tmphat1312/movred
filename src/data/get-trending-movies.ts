import { authenticatedApiClient } from "@/lib/apiClient";

type Options = {
	time_window: "day" | "week";
	page: number;
};

export async function getTrendingMovies({ time_window, page }: Options) {
	const response = await authenticatedApiClient.get(
		`/trending/movie/${time_window}?page=${page}`
	);

	return response.data;
}

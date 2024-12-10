import { AuthenticationStatus } from "@/components/authentication-status";
import { HomeHeader } from "@/components/layouts/home-header";
import { getMovies } from "@/data/get-movies";

export default async function Home() {
  const movies = await getMovies();

  return (
    <div className="space-y-4 py-12">
      <HomeHeader />
      <main>
        <h1 className="text-bold mb-4 text-2xl">Home</h1>
        <AuthenticationStatus />
        <div>{movies.results.length}</div>
      </main>
      <footer>
        <p>Hello world from Minh Phat</p>
      </footer>
    </div>
  );
}

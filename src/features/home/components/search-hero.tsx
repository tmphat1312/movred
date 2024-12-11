export function SearchHero() {
  return (
    <div className="bg-[#00a6e6] text-layout-fg">
      <section className="container space-y-8 py-16">
        <div className="drop-shadow-lg">
          <h2 className="text-5xl font-semibold">Welcome.</h2>
          <h3 className="text-3xl font-medium">
            Millions of movies of all types to discover. Explore now.
          </h3>
        </div>

        <form className="flex rounded-full bg-background ps-2 text-foreground shadow-md outline-offset-2 has-[input:focus]:outline">
          <input
            className="grow bg-transparent px-4 py-2.5 focus:outline-none"
            placeholder="Search for a movie with a keyword or two :)..."
          />
          <button className="green-gradient rounded-full px-6">Search</button>
        </form>
      </section>
    </div>
  );
}

import { AuthenticationStatus } from "@/components/authentication-status";
import { HomeHeader } from "@/components/layouts/home-header";

export default function Home() {
  return (
    <div className="py-12 space-y-4">
      <HomeHeader />
      <main>
        <h1 className="text-2xl text-bold mb-4">Home</h1>
        <AuthenticationStatus />
      </main>
      <footer>
        <p>Hello world from Minh Phat</p>
      </footer>
    </div>
  );
}

import { UserDetails } from "@/features/user/components/user-details";

export default function Dashboard() {
  return (
    <main className="container py-12">
      <h1 className="text-bold mb-4 text-2xl">Dashboard</h1>
      <UserDetails />
    </main>
  );
}

import { DashboardHeader } from "@/components/layouts/dashboard-header";
import { UserDetails } from "@/features/user/components/user-details";

export default function Dashboard() {
  return (
    <main className="py-12">
      <DashboardHeader />
      <h1 className="text-2xl text-bold mb-4">Dashboard</h1>
      <UserDetails />
    </main>
  );
}

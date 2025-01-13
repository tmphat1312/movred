import { UnderlineLink } from "@/components/ui/underline-link";

export default function NotFound() {
  return (
    <section className="h-[500px] py-8 text-center">
      <h2 className="text-green-gradient mb-4 text-3xl font-bold uppercase">
        Movie Not Found
      </h2>
      <p>Could not find requested movie, it&apos;s not in our database yet.</p>
      <UnderlineLink href="/">Return Home</UnderlineLink>
    </section>
  );
}

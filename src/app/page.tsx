import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/sign-up">Sign Up</Link>
          <Link href="/sign-in">Sign In</Link>
        </nav>
      </header>
      <main>Hello world</main>
    </div>
  );
}

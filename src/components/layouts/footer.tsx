import { FancyLogo } from "../fancy-logo";
import { GradientLink } from "../gradient-link";

export function Footer() {
  return (
    <div className="bg-layout-bg text-layout-fg">
      <footer className="container py-8">
        <div className="flex items-start justify-center gap-12">
          <FancyLogo />
          <section className="py-8">
            <h3 className="mb-1 text-lg font-bold uppercase">Students</h3>
            <ul className="space-y-1">
              <li>
                <GradientLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://github.com/tmphat1312"}
                >
                  tmphat1312
                </GradientLink>
              </li>
              <li>
                <GradientLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://github.com/Flashback054/"}
                >
                  Flashback054
                </GradientLink>
              </li>
              <li>
                <GradientLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://github.com/nguyenphucphat"}
                >
                  nguyenphucphat
                </GradientLink>
              </li>
            </ul>
          </section>
          <section className="py-8">
            <h3 className="mb-1 text-lg font-bold uppercase">Links</h3>
            <ul className="space-y-1">
              <li>
                <GradientLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://tmdb.org/"}
                >
                  The Movie Database
                </GradientLink>
              </li>
              <li>
                <GradientLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://clerk.com/"}
                >
                  Clerk Authentication
                </GradientLink>
              </li>
              <li>
                <GradientLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://github.com/tmphat1312/movred"}
                >
                  GitHub Repository
                </GradientLink>
              </li>
            </ul>
          </section>
          <section className="py-8">
            <h3 className="mb-1 text-lg font-bold uppercase">Tech stack</h3>
            <ul>
              <li>
                <GradientLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://nextjs.org/"}
                >
                  Next.js
                </GradientLink>
              </li>
              <li>
                <GradientLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://tailwindcss.com/"}
                >
                  Tailwind CSS
                </GradientLink>
              </li>
              <li>
                <GradientLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://react.dev/"}
                >
                  ReactJS
                </GradientLink>
              </li>
              <li>
                <GradientLink
                  target="_blank"
                  rel="noopener noreferrer"
                  href={"https://vercel.com/"}
                >
                  Vercel
                </GradientLink>
              </li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
}

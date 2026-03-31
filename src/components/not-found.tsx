import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function NotFound({ children }: { children?: ReactNode }) {
  return (
    <section>
      <h1 className="mb-8 font-semibold text-2xl tracking-tighter">
        404 - Page Not Found
      </h1>
      <div className="mb-4">
        {children || <p>The page you are looking for does not exist.</p>}
      </div>
      <Link
        className="text-blue-600 underline hover:text-blue-800 dark:text-blue-400"
        to="/"
      >
        Go home
      </Link>
    </section>
  );
}

import type { ErrorComponentProps } from "@tanstack/react-router";
import {
  ErrorComponent,
  Link,
  rootRouteId,
  useMatch,
  useRouter,
} from "@tanstack/react-router";

export function DefaultCatchBoundary({ error }: ErrorComponentProps) {
  const router = useRouter();
  const isRoot = useMatch({
    strict: false,
    select: (state) => state.id === rootRouteId,
  });

  return (
    <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 p-4">
      <ErrorComponent error={error} />
      <div className="flex flex-wrap items-center gap-2">
        <button
          className="rounded-sm bg-zinc-700 px-2 py-1 font-extrabold text-white uppercase dark:bg-zinc-800"
          onClick={() => router.invalidate()}
          type="button"
        >
          Try Again
        </button>
        {isRoot ? (
          <Link
            className="rounded-sm bg-zinc-700 px-2 py-1 font-extrabold text-white uppercase dark:bg-zinc-800"
            to="/"
          >
            Home
          </Link>
        ) : (
          <button
            className="rounded-sm bg-zinc-700 px-2 py-1 font-extrabold text-white uppercase dark:bg-zinc-800"
            onClick={() => window.history.back()}
            type="button"
          >
            Go Back
          </button>
        )}
      </div>
    </div>
  );
}

import { Link } from "@tanstack/react-router";

const navItems = [
  { path: "/", name: "home" },
  { path: "/blog", name: "writing" },
] as const;

export function Navbar() {
  return (
    <aside className="mb-16 -ml-[8px] tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {navItems.map(({ path, name }) => (
              <Link
                activeOptions={{ exact: path === "/" }}
                activeProps={{
                  className: "font-bold",
                }}
                className="relative m-1 flex px-2 py-1 align-middle transition-all hover:text-zinc-200 dark:hover:text-zinc-100"
                key={path}
                to={path}
              >
                {name}
              </Link>
            ))}
            <a
              className="relative m-1 flex px-2 py-1 align-middle transition-all hover:text-zinc-200 dark:hover:text-zinc-100"
              href="https://trama.so?utm_source=ataschz.com&utm_medium=web&utm_campaign=nav"
              rel="noopener noreferrer"
              target="_blank"
            >
              🧶 trama
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}

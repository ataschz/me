function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="12"
      role="img"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Arrow</title>
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

const links = [
  { href: "https://x.com/ataschz", label: "x" },
  { href: "https://linkedin.com/in/ataschz", label: "linkedin" },
  { href: "https://github.com/ataschz", label: "github" },
  { href: "https://ataschz.substack.com/feed", label: "rss" },
];

export function Footer() {
  return (
    <footer className="mb-16">
      <ul className="mt-8 flex flex-col space-x-0 space-y-2 text-sm text-zinc-500 md:flex-row md:space-x-4 md:space-y-0 dark:text-zinc-400">
        {links.map(({ href, label }) => (
          <li key={label}>
            <a
              className="flex items-center transition-all hover:text-zinc-200 dark:hover:text-zinc-100"
              href={href}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ArrowIcon />
              <p className="ml-2 h-7">{label}</p>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-zinc-500 dark:text-zinc-400">
        &copy; {new Date().getFullYear()} MIT Licensed
      </p>
    </footer>
  );
}

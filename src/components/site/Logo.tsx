export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const main = tone === "dark" ? "text-ink" : "text-on-ink";
  const sub = tone === "dark" ? "text-muted-foreground" : "text-on-ink-muted";
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden
        className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 10.5 12 4l9 6.5V20H3z" strokeLinejoin="round" />
          <path d="M6 12h12M6 15h12M6 18h12" />
        </svg>
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span className={`font-display text-[15px] font-extrabold tracking-tight sm:text-base ${main}`}>
          CABLETON GARAGE DOORS
        </span>
        <span className={`mt-1 text-[10px] font-semibold tracking-[0.16em] uppercase ${sub}`}>
          Repair · Install · Service
        </span>
      </span>
    </span>
  );
}

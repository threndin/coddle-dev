type IconName = "arrow-up" | "arrow-down" | "spark" | "workspace" | "learn" | "sun" | "moon";

const paths: Record<IconName, React.ReactNode> = {
  "arrow-up": <path d="M6 18 18 6M8 6h10v10" />,
  "arrow-down": <path d="M12 5v14m-6-6 6 6 6-6" />,
  spark: <><path d="M11 3c.6 5 2 6.4 7 7-5 .6-6.4 2-7 7-.6-5-2-6.4-7-7 5-.6 6.4-2 7-7Z" /><path d="M19 14v6m-3-3h6" /></>,
  workspace: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18m-12 0v11" /></>,
  learn: <><path d="M12 6v14M3 5c4-1 7 0 9 2 2-2 5-3 9-2v13c-4-1-7 0-9 2-2-2-5-3-9-2z" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
  moon: <path d="M20.8 14.1A9 9 0 0 1 9.9 3.2 9 9 0 1 0 20.8 14.1Z" />,
};

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

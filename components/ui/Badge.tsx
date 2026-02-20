interface BadgeProps {
  children: React.ReactNode;
  tone?: "neutral" | "good" | "info";
}

export function Badge({ children, tone = "neutral" }: BadgeProps) {
  const styles = {
    neutral: "bg-slate-800 text-slate-200",
    good: "bg-emerald-500/20 text-emerald-300",
    info: "bg-sky-500/20 text-sky-300",
  };

  return <span className={`rounded-full px-3 py-1 text-xs font-medium ${styles[tone]}`}>{children}</span>;
}

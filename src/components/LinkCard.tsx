import type { ReactNode } from "react";

type LinkCardProps = {
  label: string;
  href: string;
  icon: ReactNode;
};

export default function LinkCard({ label, href, icon }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center gap-3 rounded-2xl border border-white/60 bg-white/50 px-5 py-4 text-sm font-medium text-[#3a2c22] shadow-[0_6px_18px_-6px_rgba(180,120,70,0.25)] backdrop-blur-md transition-colors duration-200 hover:bg-white/70 dark:border-white/10 dark:bg-white/[0.06] dark:text-[#f3e7d9] dark:hover:bg-white/10"
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

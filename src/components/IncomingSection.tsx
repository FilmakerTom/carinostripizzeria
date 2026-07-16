import { Sparkles } from "lucide-react";
import pattern from "@/assets/pattern.svg";

export interface IncomingItem {
  name: string;
  description: string;
  tagline?: string;
}

interface IncomingSectionProps {
  item: IncomingItem;
}

const PizzaSliceIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2 3 22h18L12 2Z" />
    <path d="M12 8v6" />
    <path d="m9 14 6-2" />
    <circle cx="12" cy="13" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const IncomingSection = ({ item }: IncomingSectionProps) => {
  return (
    <div className="relative mb-16 overflow-hidden rounded-sm border border-border bg-card shadow-lg">
      {/* Decorative terracotta top strip */}
      <div className="h-2 bg-primary" />

      {/* Subtle pattern watermark */}
      <img
        src={pattern}
        alt=""
        className="absolute top-0 right-0 w-72 opacity-[0.04] pointer-events-none"
      />

      {/* "Novità" badge */}
      <div className="absolute top-4 right-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground shadow-md">
          <Sparkles className="h-3.5 w-3.5" />
          Novità
        </span>
      </div>

      <div className="relative z-10 p-6 md:p-8">
        {/* Section label */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          In Arrivo
        </p>

        {/* Title row with icon */}
        <div className="mb-4 flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
            <PizzaSliceIcon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-3xl font-normal text-foreground md:text-4xl">
              {item.name}
            </h3>
            {item.tagline && (
              <p
                className="mt-1 text-xl text-primary md:text-2xl"
                style={{ fontFamily: "var(--font-script)" }}
              >
                {item.tagline}
              </p>
            )}
          </div>
        </div>

        {/* Decorative divider */}
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <div className="h-1.5 w-1.5 rotate-45 bg-primary" />
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {item.description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary/60 to-transparent" />
    </div>
  );
};

export default IncomingSection;

export interface MilestoneCardProps {
  number: string;
  numberClass: string;
  borderClass: string;
  icon: string;
  title: string;
  description: string;
  barClass: string;
  progress: string;
  desktopOffsetClass?: string;
  index?: number;
}

/**
 * Construction milestone tile for the progress bento grid.
 * Stagger offsets apply on desktop only; mobile uses a clean 1–2 col rhythm.
 */
export default function MilestoneCard({
  number,
  numberClass,
  borderClass,
  icon,
  title,
  description,
  barClass,
  progress,
  desktopOffsetClass = "",
  index = 0,
}: MilestoneCardProps) {
  return (
    <article
      className={`bento-card scroll-reveal ${desktopOffsetClass}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`glass-panel p-6 sm:p-8 lg:p-10 h-full border-t-2 ${borderClass} flex flex-col`}
      >
        <div className="flex justify-between items-start mb-8 sm:mb-10 lg:mb-12">
          <span
            className={`font-technical-mono text-2xl sm:text-3xl lg:text-headline-md ${numberClass}`}
          >
            {number}
          </span>
          <span className="material-symbols-outlined text-platinum/20 text-3xl sm:text-4xl">
            {icon}
          </span>
        </div>
        <h3 className="text-headline-md-fluid text-soft-ivory mb-3 sm:mb-4">
          {title}
        </h3>
        <p className="text-platinum/60 text-sm sm:text-base flex-1">
          {description}
        </p>
        <div className="mt-6 sm:mt-8 flex items-center gap-4">
          <div className="h-1 flex-1 bg-platinum/10 rounded-full overflow-hidden">
            <div className={`h-full ${barClass} transition-all duration-1000`} />
          </div>
          <span className="font-technical-mono text-[10px] sm:text-xs text-platinum shrink-0">
            {progress}
          </span>
        </div>
      </div>
    </article>
  );
}

import Image from "next/image";

export type BentoCardVariant = "image" | "glass" | "accent";

export interface BentoCardProps {
  title: string;
  description?: string | null;
  icon?: string;
  image?: string | null;
  className?: string;
  heightClass?: string;
  variant?: BentoCardVariant;
  size?: "default" | "compact" | "feature";
  index?: number;
}

/**
 * Premium bento tile — image overlays, glass panels, and accent fills
 * with touch-friendly description reveal on mobile.
 */
export default function BentoCard({
  title,
  description,
  icon,
  image,
  className = "",
  heightClass = "min-h-[280px] sm:min-h-[320px] lg:min-h-[400px]",
  variant = "image",
  size = "default",
  index = 0,
}: BentoCardProps) {
  const isAccent = variant === "accent" || !image;
  const isCompact = size === "compact";
  const isFeature = size === "feature";

  return (
    <article
      className={`bento-card group scroll-reveal h-full ${className}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className={`relative ${heightClass} glass-panel overflow-hidden h-full ${
          isCompact ? "bento-card--compact" : ""
        } ${isFeature ? "bento-card--feature" : ""}`}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/40 to-transparent z-10 pointer-events-none" />

        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div
            className={`absolute inset-0 z-0 ${
              isAccent
                ? "bg-emerald-accent/25"
                : "bg-surface-container-high"
            }`}
          >
            {icon && (
              <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <span className="material-symbols-outlined text-[120px] text-soft-ivory">
                  {icon}
                </span>
              </div>
            )}
          </div>
        )}

        {/* Architectural corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-platinum/10 z-20 pointer-events-none" />

        <div
          className={`absolute bottom-0 left-0 right-0 z-20 ${
            isCompact
              ? "p-3 sm:p-4 lg:p-8"
              : "p-4 sm:p-6 lg:p-8"
          }`}
        >
          {icon && (
            <span
              className={`material-symbols-outlined text-soft-ivory block ${
                isCompact
                  ? "text-xl mb-1.5 sm:text-2xl sm:mb-2"
                  : "text-2xl mb-2 sm:text-3xl sm:mb-4"
              }`}
            >
              {icon}
            </span>
          )}
          <h4
            className={`text-soft-ivory ${
              isCompact
                ? "text-sm sm:text-base lg:text-headline-md-fluid leading-tight"
                : "text-headline-md-fluid"
            }`}
          >
            {title}
          </h4>
          {description && (
            <p
              className={`text-platinum/60 mt-1.5 max-w-sm opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 ${
                isCompact ? "text-xs sm:text-sm" : "text-sm sm:text-base mt-2"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
}

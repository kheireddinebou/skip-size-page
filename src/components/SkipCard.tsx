import { FaCheck } from "react-icons/fa6";
import { FiAlertTriangle } from "react-icons/fi";
import type { SkipOption } from "../types/global";
import { cn } from "../lib/utils";

interface SkipCardProps {
  skip: SkipOption;
  isSelected: boolean;
  onSelect: (skipId: number) => void;
}

const SpecialFeatRow = ({ label }: { label: string }) => (
  <div className="flex items-center gap-1 w-full">
    <div className="bg-primary/10 h-5 w-5 grid place-items-center rounded-full">
      <FaCheck className="text-primary w-4 h-4" />
    </div>
    <span className="text-xs">{label}</span>
  </div>
);

const SkipCard = ({ skip, isSelected, onSelect }: SkipCardProps) => {
  // Format hire period for display
  const hirePeriodText = `${skip.hire_period_days} day${
    skip.hire_period_days !== 1 ? "s" : ""
  } hire`;

  const skipName = `${skip.size} Yard Skip`;

  const handleSelectSkip = (skip: SkipOption) => {
    if (!skip.forbidden) {
      onSelect(skip.id);
    }
  };

  return (
    <div
      className={cn(
        "relative bg-card rounded-3xl p-4 md:p-6 flex flex-col gap-4 transition-all duration-300 cursor-pointer group hover:shadow-xl shadow-md hover:shadow-lg",
        isSelected && "ring-2 ring-primary shadow-xl scale-102 sm:scale-105",
        skip.forbidden && "opacity-60 !cursor-not-allowed"
      )}
      onClick={() => handleSelectSkip(skip)}
    >
      {/* Skip image */}
      <div className="relative">
        <img
          alt=""
          src={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${skip.size}-yarder-skip.jpg`}
          className="w-full h-40 rounded-lg object-cover opacity-90"
        />

        <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-lg text-sm font-semibold">
          {skip.size} Yard
        </div>

        {/* Forbidden indicator */}
        {skip.forbidden && (
          <div className="absolute top-0 left-0 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
            Unavailable
          </div>
        )}
      </div>

      {/* Skip details */}
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-foreground">{skipName}</h3>

        <div className="space-y-1 text-sm text-muted-foreground">
          <p>{hirePeriodText}</p>
          {skip.area && <p>Area: {skip.area}</p>}
          {skip.transport_cost && (
            <p>Transport: £{skip.transport_cost.toFixed(2)}</p>
          )}
          {skip.per_tonne_cost && (
            <p>Per tonne: £{skip.per_tonne_cost.toFixed(2)}</p>
          )}
        </div>

        <span className="text-2xl font-bold text-primary">
          £{skip.price_before_vat.toFixed(2)}
        </span>
      </div>

      {/* Special features */}
      {(skip.allowed_on_road || skip.allows_heavy_waste) && (
        <div className="flex gap-2 flex-wrap">
          {skip.allowed_on_road && <SpecialFeatRow label="Road placement" />}
          {skip.allows_heavy_waste && <SpecialFeatRow label="Heavy waste OK" />}
        </div>
      )}

      {!skip.allowed_on_road && (
        <div className="border border-orange-500 text-orange-500 text-sm w-fit px-2 py-1 rounded-lg flex items-center gap-2">
          <FiAlertTriangle />
          <span>Not allowed on the road</span>
        </div>
      )}

      <button
        className={cn(
          "w-full py-3 group not-prose inline-flex items-center justify-center gap-2 rounded-3xl font-semibold transition-all duration-300 cursor-pointer  border border-muted-foreground",
          skip.forbidden && "cursor-not-allowed",
          isSelected
            ? "bg-primary text-white border-primary"
            : "bg-card text-muted-foreground hover:bg-blue-50 hover:text-primary"
        )}
        disabled={skip.forbidden}
      >
        {skip.forbidden ? "Unavailable" : isSelected ? "Selected" : "Select"}

        {!isSelected && !skip.forbidden && (
          <svg
            viewBox="0 0 24 24"
            className="size-5 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
          >
            <line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              className="scale-x-0 translate-x-[10px] group-hover:translate-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
            />
            <polyline
              points="12 5 19 12 12 19"
              className="-translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default SkipCard;

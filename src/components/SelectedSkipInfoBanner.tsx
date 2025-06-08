import { LuCalendar, LuPackage } from "react-icons/lu";
import { cn } from "../lib/utils";
import type { SkipOption } from "../types/global";

interface SelectedSkipInfoBannerProps {
  selectedSkip: SkipOption | null;
}

const SelectedSkipInfoBanner = ({
  selectedSkip,
}: SelectedSkipInfoBannerProps) => {
  const skipName = selectedSkip ? `${selectedSkip.size} Yard Skip` : "";
  const hirePeriodText = selectedSkip
    ? `${selectedSkip.hire_period_days} day${
        selectedSkip.hire_period_days !== 1 ? "s" : ""
      } hire`
    : "";

  return (
    <div
      className={cn(
        `transform transition-all duration-500 ease-out overflow-hidden border-t border-primary/20 bg-card/30 backdrop-blur-3xl ${
          selectedSkip
            ? "max-h-fit opacity-100 translate-y-0"
            : "max-h-0 opacity-0 translate-y-4"
        }`
      )}
    >
      {selectedSkip && (
        <div className="py-4">
          <div className="container mx-auto flex flex-col gap-1">
            <span className="text-muted-foreground text-xs text-center self-center">
              Imagery and information shown throughout this website may not
              reflect the exact shape or size specification, colours may vary,
              options and/or accessories may be featured at additional cost.
            </span>

            <div className="flex items-center justify-between">
              {/* Left side - Skip info */}
              <div className="flex items-center space-x-2 md:space-x-4">
                <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full animate-scale-in">
                  <LuPackage className="w-5 h-5 text-primary" />
                </div>
                <div className="animate-fade-in">
                  <h3 className="font-semibold text-foreground text-lg">
                    {skipName}
                  </h3>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <LuCalendar className="w-3 h-3" />
                    <span>{hirePeriodText}</span>
                  </div>
                </div>
              </div>

              {/* Right side - Price */}
              <div className="text-2xl font-bold text-primary">
                £{selectedSkip.price_before_vat.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectedSkipInfoBanner;

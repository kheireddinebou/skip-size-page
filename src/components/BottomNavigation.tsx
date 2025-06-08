import { LuArrowLeft, LuArrowRight } from "react-icons/lu";
import type { SkipOption } from "../types/global";
import SelectedSkipInfoBanner from "./SelectedSkipInfoBanner";

interface BottomNavigationProps {
  onBack: () => void;
  onContinue: () => void;
  canContinue: boolean;
  selectedSkip: SkipOption | null;
}

const BottomNavigation = ({
  onBack,
  onContinue,
  canContinue,
  selectedSkip,
}: BottomNavigationProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="shadow-2xl">
        {/* Selected skip info - animated slide up */}
        <SelectedSkipInfoBanner selectedSkip={selectedSkip} />

        {/* Navigation buttons */}
        <div className="py-4 bg-background border-t border-primary/20">
          <div className="container mx-auto flex items-center justify-between ">
            {/* Back button */}
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl transition-all duration-200 group cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-5 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              >
                <line
                  x1="19"
                  y1="12"
                  x2="5"
                  y2="12"
                  className="scale-x-0 translate-x-[10px] group-hover:translate-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                />
                <polyline
                  points="12 19 5 12 12 5"
                  className="translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                />
              </svg>
              <span className="font-medium">Back</span>
            </button>

            {/* Continue button */}
            <button
              onClick={onContinue}
              disabled={!canContinue}
              className={`flex items-center space-x-3  px-4 md:px-6 py-3 md:py-4 rounded-xl font-semibold transition-all duration-300 group relative overflow-hidden ${
                canContinue
                  ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl cursor-pointer"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              <span className="relative z-10">Continue</span>
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;

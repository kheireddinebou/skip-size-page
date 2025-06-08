import type { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa6";
import { cn } from "../../lib/utils";

interface StepButtonProps {
  index: number;
  title: string;
  Icon: IconType;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

const StepButton: React.FC<StepButtonProps> = ({
  title,
  isActive,
  isCompleted,
  onClick,
  Icon,
}) => {
  const colorClassName = isActive || isCompleted ? "primary" : "muted";
  const DisplayedIcon = isCompleted ? FaCheck : Icon;

  return (
    <li
      className={cn(
        "flex flex-col items-start gap-3 sm:w-full",
        isCompleted || isActive ? "cursor-pointer" : "cursor-not-allowed"
      )}
      onClick={onClick}
    >
      <div
        className={`max-sm:hidden w-full h-1.5  bg-${colorClassName} rounded-md`}
      />

      <div
        className={`flex items-center gap-1 md:gap-2 text-${colorClassName} after:content-['/'] sm:after:hidden`}
      >
        <div
          className={`rounded-full grid place-items-center h-5 md:h-6 w-5 md:w-6 bg-${colorClassName}`}
        >
          <DisplayedIcon
            className={`text-${colorClassName}-foreground w-3 md:w-4 h-3 md:h-4`}
          />
        </div>

        <span className={`text-sm text-nowrap`}>{title}</span>
      </div>
    </li>
  );
};

export default StepButton;

import type { IconType } from "react-icons";
import { FaCheck } from "react-icons/fa6";

interface StepButtonProps {
  index: number;
  title: string;
  Icon: IconType;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

interface StepIconProps {
  Icon: IconType;
  className?: string;
  colorClassName: string;
  iconClassName: string;
  isCompleted: boolean;
}

const StepIcon = ({
  Icon,
  className,
  iconClassName,
  colorClassName,
  isCompleted,
}: StepIconProps) => {
  const DisplayedIcon = isCompleted ? FaCheck : Icon;
  return (
    <div
      className={`rounded-full grid place-items-center bg-${colorClassName} ${className}`}
    >
      <DisplayedIcon
        className={`text-${colorClassName}-foreground ${iconClassName}`}
      />
    </div>
  );
};

const StepButton: React.FC<StepButtonProps> = ({
  index,
  title,
  isActive,
  isCompleted,
  onClick,
  Icon,
}) => {
  const colorClassName = isActive || isCompleted ? "primary" : "muted";

  return (
    <li
      className={`flex flex-col items-start gap-3 sm:w-full ${
        isCompleted || isActive ? "cursor-pointer" : "cursor-not-allowed"
      }`}
      onClick={onClick}
    >
      <StepIcon
        className="max-sm:hidden h-10 w-10"
        iconClassName="w-5 h-5"
        colorClassName={colorClassName}
        Icon={Icon}
        isCompleted={isCompleted}
      />

      <div
        className={`max-sm:hidden w-full h-1.5  bg-${colorClassName} rounded-md`}
      />

      <div
        className={`flex items-center gap-1 text-${colorClassName} after:content-['/'] sm:after:hidden`}
      >
        <StepIcon
          className="sm:hidden h-6 w-6"
          iconClassName="w-3 h-3"
          colorClassName={colorClassName}
          Icon={Icon}
          isCompleted={isCompleted}
        />

        <span className={`text-sm text-nowrap`}>{title}</span>
      </div>
    </li>
  );
};

export default StepButton;

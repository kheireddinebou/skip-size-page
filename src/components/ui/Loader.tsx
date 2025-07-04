import { cn } from "../../lib/utils";
import "../../styles/loader.css";

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return (
    <div
      className={cn("mt-[25vh] grid place-items-center mx-auto", className)}
    >
      <div className="loadingContainer1">
        <div className="ball1"></div>
        <div className="ball2"></div>
        <div className="ball3"></div>
        <div className="ball4"></div>
      </div>
    </div>
  );
};

export default Loader;

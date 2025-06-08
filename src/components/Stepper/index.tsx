import { useState } from "react";
import { stepOptions } from "../../constants/steps";
import StepButton from "./StepperButton";

const Stepper = () => {
  const [activeStep, setActiveStep] = useState<number>(2); // 3rd step (index 2)

  return (
    <ol className="flex overflow-auto py-4 gap-2 xl:gap-4 md:py-8 items-center w-full text-muted-foreground">
      {stepOptions.map((step, index) => (
        <StepButton
          key={index}
          index={index}
          title={step.title}
          Icon={step.icon}
          isActive={index === activeStep}
          isCompleted={index < activeStep}
          onClick={() => {
            alert(`navigate to step ${step.title}`);
          }}
        />
      ))}
    </ol>
  );
};

export default Stepper;

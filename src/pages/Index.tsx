import { useEffect, useState } from "react";
import SkipCard from "../components/SkipCard";
import Stepper from "../components/Stepper";
import { fetchSkipOptions } from "../services/skips";
import type { SkipOption } from "../types/global";
import Loader from "../components/ui/Loader";
import BottomNavigation from "../components/BottomNavigation";

function Index() {
  const [skips, setSkips] = useState<SkipOption[]>([]);
  const [selectedSkip, setSelectedSkip] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        setLoading(true);
        const res = await fetchSkipOptions();
        setSkips(res);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unexpected error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  const handleContinue = () => {
    if (selectedSkip) {
      alert("continue");
    }
  };

  const handleBack = () => {
    console.log("Going back to previous step");
  };

  return (
    <div className="bg-background text-foreground w-[100%] min-h-dvh flex justify-center">
      <div className="flex flex-col items-center bg-background container">
        {/* Step Indicator */}
        <Stepper />

        {/* Header */}
        <div className="text-center flex flex-col items-center gap-3 mt-8 mb-12 md:mb-16">
          <h1 className="text-3xl md:text-4xl">Choose Your Skip Size</h1>
          <h3 className="text-muted-foreground">
            Select the skip size that best suits your needs
          </h3>
        </div>

        {error ? (
          <span>{error}</span>
        ) : loading ? (
          <Loader />
        ) : (
          // Skip grid
          <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(290px,1fr))] gap-4 lg:grid-cols-[repeat(auto-fit,_minmax(340px,1fr))] justify-center mb-60">
            {skips.map(skip => (
              <SkipCard
                key={skip.id}
                skip={skip}
                isSelected={selectedSkip === `${skip.id}`}
                onSelect={() => setSelectedSkip(`${skip.id}`)}
              />
            ))}
          </div>
        )}

        {/* Navigation */}
        <BottomNavigation
          onBack={handleBack}
          onContinue={handleContinue}
          canContinue={!!selectedSkip}
          selectedSkip={
            selectedSkip
              ? (skips.find(s => `${s.id}` === selectedSkip) as SkipOption)
              : null
          }
        />
      </div>
    </div>
  );
}

export default Index;

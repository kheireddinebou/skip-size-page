import { useEffect, useState } from "react";
import { fetchSkipOptions } from "./services/skips";
import type { SkipOption } from "./types/global";

function SkipSizeSelector() {
  const [skips, setSkips] = useState<SkipOption[]>([]);
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <span>skip page</span>;
}

export default SkipSizeSelector;

const API_URL = import.meta.env.VITE_API_URL;

export const fetchSkipOptions = async () => {
  const response = await fetch(
    API_URL + "/skips/by-location?postcode=NR32&area=Lowestoft"
  );

  const data = await response.json();
  return data;
};

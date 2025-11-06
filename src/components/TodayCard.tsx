import today_small from '../assets/images/bg-today-small.svg';
import sunny from '../assets/images/icon-sunny.webp';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getCurrentWeather } from '../api/weatherService';

export default function TodayCard() {
  const queryClient = useQueryClient();

  const { data: location } = useQuery<
    { lat: number; lon: number; name: string } | undefined
  >({
    queryKey: ['location'],
    queryFn: async () => {
      return queryClient.getQueryData(['location']);
    },
    initialData: { lat: 52.52, lon: 13.405, name: 'Berlin' },
    staleTime: Infinity,
  });

  const {
    data: weatherData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['weather', location?.lat, location?.lon],
    queryFn: async () => {
      if (!location) throw new Error('No location');
      return getCurrentWeather(location.lat, location.lon);
    },
    enabled: !!location,
  });

  if (isLoading) return <p>Lade Temperatur...</p>;
  if (isError) return <p>Fehler beim Laden der Wetterdaten.</p>;
  if (!weatherData) return null;

  // Datum korrekt formatieren (sprache: 'de-DE')
  const today = new Date();
  const formattedDate = today.toLocaleDateString('de-DE', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <div className="relative rounded-3xl overflow-hidden">
      <img
        src={today_small}
        alt="Hintergrund"
        className="w-full h-auto block"
      />
      <div className="absolute inset-0 grid gap-2 h-full place-items-center">
        <div className="grid gap-2 place-items-center self-end">
          {location ? (
            <span className="text-3xl font-semibold">{location.name}</span>
          ) : null}
          <span className="text-lg text-(--secondary-text-color)">
            {formattedDate}
          </span>
        </div>
        <div className="flex items-center self-start">
          <img className="w-35" src={sunny} alt="Sonnensymbol" />
          <span className="text-8xl font-semibold">
            {Math.round(weatherData.current_weather.temperature)}°
          </span>
        </div>
      </div>
    </div>
  );
}

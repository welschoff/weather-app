import today_small from '../assets/images/bg-today-small.svg';
import sunny from '../assets/images/icon-sunny.webp';
import { useQuery } from '@tanstack/react-query';
import { getCurrentWeather } from '../api/weatherService';

interface TodayCardProps {
  lat: number;
  lon: number;
  city: string;
}
export default function TodayCard({ lat, lon, city }: TodayCardProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['weather', lat, lon],
    queryFn: () => getCurrentWeather(lat, lon),
  });

  if (data) {
    console.log(data);
  }
  if (isLoading) return <p>Lade Temperatur...</p>;
  if (isError) return <p>Fehler beim Laden der Wetterdaten.</p>;

  const today = new Date();
  const formattedDate = today.toLocaleDateString('DE', {
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
          <span className="text-3xl font-semibold">{city}</span>
          <span className="text-lg text-(--secondary-text-color)">
            {formattedDate}
          </span>
        </div>
        <div className="flex items-center self-start">
          <img className="w-35" src={sunny} alt="Sonnensymbol" />
          <span className="text-8xl font-semibold">
            {' '}
            {Math.round(data?.current_weather.temperature ?? 0)}°
          </span>
        </div>
      </div>
    </div>
  );
}

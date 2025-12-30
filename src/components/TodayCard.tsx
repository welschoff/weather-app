import today_small from '../assets/images/bg-today-small.svg';
import WeatherIcon from './WeatherIcon';
import { useLocationQuery } from '../hooks/useLocationQuery';
import { useWeatherQuery } from '../hooks/useWeatherQuery';

export default function TodayCard() {
  const { data: location } = useLocationQuery();
  const { data: weatherData, isLoading, isError } = useWeatherQuery(location);

  if (isLoading) return <p>Lade Wetterdaten...</p>;
  if (!weatherData) return <p>Keine Wetterdaten</p>;
  if (isError) return <p>Fehler beim Laden!</p>;

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
          <WeatherIcon
            weather_code={weatherData.current.weather_code}
            size="w-35"
          />
          <span className="text-8xl font-semibold">
            {Math.round(weatherData.current.temperature_2m)}°
          </span>
        </div>
      </div>
    </div>
  );
}

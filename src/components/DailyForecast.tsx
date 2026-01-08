import DailyCard from './DailyCard';
import { useLocationQuery } from '../hooks/useLocationQuery';
import { useWeatherQuery } from '../hooks/useWeatherQuery';
import WeatherIcon from './WeatherIcon';

function DailyForecast() {
  const { data: location } = useLocationQuery();
  const { data: weatherData, isLoading, isError } = useWeatherQuery(location);

  if (isLoading) return <p>Lade Wetterdaten...</p>;
  if (isError) return <p>Fehler beim Laden!</p>;
  if (!weatherData) return <p>Keine Wetterdaten</p>;

  const maxTemp = weatherData.daily.temperature_2m_max.map((temp: number) =>
    Math.round(temp)
  );
  const minTemp = weatherData.daily.temperature_2m_min.map((temp: number) =>
    Math.round(temp)
  );
  const days = weatherData.daily.time.map((day: string) =>
    new Date(day).toLocaleDateString('en-EN', { weekday: 'short' })
  );

  const weatherCode = weatherData.daily.weather_code;

  return (
    <div>
      <h2 className="pb-5">Daily forecast</h2>
      <div className="grid grid-cols-3 gap-3 lg:flex justify-between">
        {days.map((day, i) => (
          <DailyCard
            key={day}
            day={day}
            WeatherIcon={WeatherIcon}
            maxTemp={maxTemp[i]}
            minTemp={minTemp[i]}
            code={weatherCode[i]}
          />
        ))}
      </div>
    </div>
  );
}

export default DailyForecast;

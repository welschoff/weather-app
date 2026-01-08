import HourCard from './HourCard';
import { useLocationQuery } from '../hooks/useLocationQuery';
import { useWeatherQuery } from '../hooks/useWeatherQuery';
import { DateTime } from 'luxon';
import WeatherIcon from './WeatherIcon';

function HourlyForecast() {
  const { data: location, isLoading: isLocationLoading } = useLocationQuery();
  const {
    data: weatherData,
    isLoading: isWeatherLoading,
    isError,
  } = useWeatherQuery(location);

  if (isLocationLoading || isWeatherLoading) return <p>Lade Wetterdaten...</p>;
  if (!location) return <p>Keine Standortdaten verfügbar</p>;
  if (!weatherData) return <p>Keine Wetterdaten</p>;
  if (isError) return <p>Fehler beim Laden!</p>;

  const formatTime = (hourIndex: number): string => {
    const nowInTargetZone = DateTime.now().setZone(location.timezone);

    return nowInTargetZone.plus({ hours: hourIndex }).toFormat('h a');
  };

  const timeLabels = Array.from({ length: 24 }, (_, i) => formatTime(i));

  const temps: number[] = weatherData.hourly.temperature_2m.map((hour) =>
    Math.round(hour)
  );

  const weatherCode = weatherData.daily.weather_code;

  return (
    <div className="bg-(--card-bg) p-4 rounded-lg">
      <div className="pb-4">
        <h2>Hourly forecast</h2>
      </div>

      <div className="h-[calc(8*55px)] flex flex-col gap-2 overflow-y-auto">
        {temps.slice(0, 23).map((temp, i) => (
          <HourCard
            key={i}
            WeatherIcon={WeatherIcon}
            code={weatherCode[i]}
            temp={temp}
            time={timeLabels[i]}
          />
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;

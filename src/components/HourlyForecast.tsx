import HourCard from './HourCard';
import sunny from '../assets/images/icon-sunny.webp';
import dropdown from '../assets/images/icon-dropdown.svg';
import { useLocationQuery } from '../hooks/useLocationQuery';
import { useWeatherQuery } from '../hooks/useWeatherQuery';
import { DateTime } from 'luxon';

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

  const timeLabels = Array.from({ length: 8 }, (_, i) => formatTime(i));

  const temps: number[] = weatherData.hourly.temperature_2m.map((hour) =>
    Math.round(hour)
  );

  return (
    <div className="bg-(--card-bg) p-4 rounded-lg h-full">
      <div className="flex justify-between mb-3">
        <h2>Hourly forecast</h2>
        <div className="flex gap-2 bg-[#3D3B5B] px-4 py-1 rounded-lg">
          <span className="text-base">Tuesday</span>
          <img src={dropdown} alt="" />
        </div>
      </div>

      <div className="grid gap-2">
        {temps.slice(0, 8).map((temp, idx) => (
          <HourCard
            key={idx}
            weatherImg={sunny}
            temp={temp}
            time={timeLabels[idx]}
          />
        ))}
      </div>
    </div>
  );
}

export default HourlyForecast;

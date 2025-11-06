import DailyCard from './DailyCard';
import sunny from '../assets/images/icon-sunny.webp';
import { useLocationQuery } from '../hooks/useLocationQuery';
import { useWeatherQuery } from '../hooks/useWeatherQuery';

function DailyForecast() {
  const { data: location } = useLocationQuery();
  const { data: weatherData, isLoading, isError } = useWeatherQuery(location);

  if (isLoading) return <p>Lade Wetterdaten...</p>;
  if (!weatherData) return <p>Keine Wetterdaten</p>;
  if (isError) return <p>Fehler beim Laden!</p>;

  const maxTemp: number[] = weatherData.daily.temperature_2m_max.map((temp) =>
    Math.round(temp)
  );
  const minTemp: number[] = weatherData.daily.temperature_2m_min.map((temp) =>
    Math.round(temp)
  );

  const days: string[] = weatherData.daily.time.map((day) =>
    new Date(day).toLocaleDateString('en-En', { weekday: 'short' })
  );

  return (
    <div>
      <h2 className="pt-5 pb-5">Daily forecast</h2>
      <div className="grid grid-cols-3 gap-3">
        <DailyCard
          day={days[0]}
          weatherImg={sunny}
          maxTemp={maxTemp[0]}
          minTemp={minTemp[0]}
        />
        <DailyCard
          day={days[1]}
          weatherImg={sunny}
          maxTemp={maxTemp[1]}
          minTemp={minTemp[1]}
        />
        <DailyCard
          day={days[2]}
          weatherImg={sunny}
          maxTemp={maxTemp[2]}
          minTemp={minTemp[2]}
        />
        <DailyCard
          day={days[3]}
          weatherImg={sunny}
          maxTemp={maxTemp[3]}
          minTemp={minTemp[3]}
        />
        <DailyCard
          day={days[4]}
          weatherImg={sunny}
          maxTemp={maxTemp[4]}
          minTemp={minTemp[4]}
        />
        <DailyCard
          day={days[5]}
          weatherImg={sunny}
          maxTemp={maxTemp[5]}
          minTemp={minTemp[5]}
        />
        <DailyCard
          day={days[6]}
          weatherImg={sunny}
          maxTemp={maxTemp[6]}
          minTemp={minTemp[6]}
        />
      </div>
    </div>
  );
}

export default DailyForecast;

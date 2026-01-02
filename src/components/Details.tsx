import { useLocationQuery } from '../hooks/useLocationQuery';
import { useWeatherQuery } from '../hooks/useWeatherQuery';
import DetailCard from './DetailCard';

function Details() {
  const { data: location } = useLocationQuery();
  const { data: weatherData, isLoading, isError } = useWeatherQuery(location);

  if (isLoading) return <p>Lade Wetterdaten...</p>;
  if (!weatherData) return <p>Keine Wetterdaten</p>;
  if (isError) return <p>Fehler beim Laden!</p>;

  const apparentTemparature = Math.round(
    weatherData.current.apparent_temperature
  );

  return (
    <div className="mt-5 grid grid-cols-2 grid-rows-2 gap-3 lg:flex">
      <DetailCard header="Feels Like" value={apparentTemparature} unit="°" />
      <DetailCard
        header="Humidity"
        value={weatherData.current.relative_humidity_2m}
        unit="%"
      />
      <DetailCard
        header="Wind"
        value={Math.round(weatherData.current.wind_speed_10m)}
        unit="km/h"
      />
      <DetailCard
        header="Precipitation"
        value={weatherData.current.precipitation}
        unit="mm"
      />
    </div>
  );
}

export default Details;

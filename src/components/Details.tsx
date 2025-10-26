import DetailCard from './DetailCard';

function Details() {
  return (
    <div className="flex gap-3 justify-between">
      <DetailCard header="Feels Like" value="18°" />
      <DetailCard header="Humidity" value="46%" />
      <DetailCard header="Wind" value="14 km/h" />
      <DetailCard header="Precipitation" value="0 mm" />
    </div>
  );
}

export default Details;

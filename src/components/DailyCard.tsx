type DailyCardProps = {
  day: string;
  weatherImg: string;
  maxTemp: string;
  minTemp: string;
};

function DailyCard({ day, weatherImg, maxTemp, minTemp }: DailyCardProps) {
  return (
    <div className="grid p-2 justify-items-center gap-2 bg-(--card-bg) rounded-lg w-full">
      <span>{day}</span>
      <img className="w-15" src={weatherImg} alt="Weather Image" />
      <div className="flex justify-between w-full">
        <span>{maxTemp}</span>
        <span className="text-(--secondary-text-color)">{minTemp}</span>
      </div>
    </div>
  );
}

export default DailyCard;

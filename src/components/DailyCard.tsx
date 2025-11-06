type DailyCardProps = {
  day: string;
  weatherImg: string;
  maxTemp: number;
  minTemp: number;
};

function DailyCard({ day, weatherImg, maxTemp, minTemp }: DailyCardProps) {
  return (
    <div className="grid p-2 justify-items-center gap-2 bg-(--card-bg) rounded-lg">
      <span>{day}</span>
      <img className="w-25" src={weatherImg} alt="Weather Image" />
      <div className="flex justify-between w-full">
        <span>{maxTemp}°</span>
        <span className="text-(--secondary-text-color)">{minTemp}°</span>
      </div>
    </div>
  );
}

export default DailyCard;

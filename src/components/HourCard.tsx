type HourCardProps = {
  weatherImg: string;
  temp: number;
  time: string;
};

function HourCard({ weatherImg, time, temp }: HourCardProps) {
  return (
    <div className="grid grid-flow-col w-full justify-between items-center bg-[#302E49] rounded-lg p-2">
      <div className="flex items-center">
        <img className="w-15" src={weatherImg} alt="" />
        <span className="text-2xl">{time}</span>
      </div>
      <span>{temp}°</span>
    </div>
  );
}

export default HourCard;

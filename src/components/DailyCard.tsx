import type { WeatherIconProps } from '../types/weather';
import type { ComponentType } from 'react';

type DailyCardProps = {
  day: string;
  WeatherIcon: ComponentType<WeatherIconProps>;
  maxTemp: number;
  minTemp: number;
  code: number;
};

function DailyCard({
  day,
  maxTemp,
  minTemp,
  WeatherIcon,
  code,
}: DailyCardProps) {
  return (
    <div className="grid p-2 justify-items-center gap-2 bg-(--card-bg) rounded-lg">
      <span>{day}</span>
      <WeatherIcon weather_code={code} size="w-10" />
      <div className="flex justify-between w-full">
        <span>{maxTemp}°</span>
        <span className="text-(--secondary-text-color)">{minTemp}°</span>
      </div>
    </div>
  );
}

export default DailyCard;

import type { ComponentType } from 'react';
import type { WeatherIconProps } from '../types/weather';
import WeatherIcon from './WeatherIcon';

type HourCardProps = {
  WeatherIcon: ComponentType<WeatherIconProps>;
  temp: number;
  time: string;
  code: number;
};

function HourCard({ code, time, temp }: HourCardProps) {
  return (
    <div className="grid grid-flow-col w-full justify-between items-center bg-[#302E49] rounded-lg p-2">
      <div className="flex items-center">
        <WeatherIcon weather_code={code} size="w-10" />
        <span className="text-2xl">{time}</span>
      </div>
      <span>{temp}°</span>
    </div>
  );
}

export default HourCard;

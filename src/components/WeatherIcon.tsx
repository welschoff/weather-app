import type { WeatherIconProps } from '../types/weather';
import sunny from '../assets/images/icon-sunny.webp';
import overcast_icon from '../assets/images/icon-overcast.webp';
import partly_cloudy from '../assets/images/icon-partly-cloudy.webp';
import rain_icon from '../assets/images/icon-rain.webp';
import snow_icon from '../assets/images/icon-snow.webp';
import storm_icon from '../assets/images/icon-storm.webp';

const iconMap: Record<string, string> = {
  '0': sunny,
  '1': sunny,
  '2': partly_cloudy,
  '3': overcast_icon,
  '51,53,55,56,57,61,63,65,66,67,80,81,82': rain_icon,
  '71,73,75,77,85,86': snow_icon,
  '95,96,99': storm_icon,
};

function getIcon(weather_code: number) {
  for (const [keys, icon] of Object.entries(iconMap)) {
    if (keys.split(',').map(Number).includes(weather_code)) return icon;
  }
  return sunny;
}

export default function WeatherIcon({ size, weather_code }: WeatherIconProps) {
  const icon = getIcon(weather_code);
  return <img className={size} src={icon} alt="WeatherIcon" />;
}

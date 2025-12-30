export interface CurrentWeather {
  temperature_2m: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  precipitation: number;
  apparent_temperature: number;
  weather_code: number;
}

export interface DailyWeather {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
  weather_code: number[];
}

export interface HourlyWeather {
  temperature_2m: number[];
  time: string[];
  weather_code: number[];
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  current: CurrentWeather;
  daily: DailyWeather;
  hourly: HourlyWeather;
}

export interface WeatherIconProps {
  size: string;
  weather_code: number;
}

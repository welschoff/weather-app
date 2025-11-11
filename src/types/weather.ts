export interface CurrentWeather {
  temperature_2m: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  precipitation: number;
  apparent_temperature: number;
}

export interface DailyWeather {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
}

export interface HourlyWeather {
  temperature_2m: number[];
  time: string[];
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  current: CurrentWeather;
  daily: DailyWeather;
  hourly: HourlyWeather;
}

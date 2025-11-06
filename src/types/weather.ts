export interface CurrentWeather {
  temperature_2m: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  precipitation: number;
  apparent_temperature: number;
}

export interface WeatherResponse {
  latitude: number;
  longitude: number;
  current: CurrentWeather;
}

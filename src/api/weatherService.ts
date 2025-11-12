import apiClient from './client';
import type { WeatherResponse } from '../types/weather';

export const getCurrentWeather = async (
  latitude: number,
  longitude: number
): Promise<WeatherResponse> => {
  const { data } = await apiClient.get<WeatherResponse>('/forecast', {
    params: {
      latitude,
      longitude,
      current: [
        'temperature_2m',
        'relative_humidity_2m',
        'wind_speed_10m',
        'precipitation',
        'apparent_temperature',
        'weather_code',
      ],
      daily: ['temperature_2m_max', 'temperature_2m_min', 'weather_code'],
      hourly: ['temperature_2m', 'weather_code'],
    },
  });

  return data;
};

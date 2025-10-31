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
      current_weather: true,
    },
  });
  return data;
};

import { useQuery } from '@tanstack/react-query';
import { getCurrentWeather } from '../api/weatherService'; // oder dein Pfad
import type { WeatherResponse } from '../types/weather';
import type { LocationData } from './useLocationQuery';

export function useWeatherQuery(location?: LocationData) {
  return useQuery<WeatherResponse>({
    queryKey: ['weather', location?.lat, location?.lon],
    queryFn: async () => {
      if (!location) throw new Error('No location');
      const data = await getCurrentWeather(location.lat, location.lon);
      console.log(data);
      return data;
    },
    enabled: !!location,
  });
}

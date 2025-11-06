import { useQuery, useQueryClient } from '@tanstack/react-query';

export interface LocationData {
  lat: number;
  lon: number;
  name: string;
}

export function useLocationQuery() {
  const queryClient = useQueryClient();

  return useQuery<LocationData | undefined>({
    queryKey: ['location'],
    queryFn: async () => {
      return queryClient.getQueryData(['location']);
    },
    initialData: { lat: 51.214, lon: 6.786, name: 'Düsseldorf' },
    staleTime: Infinity,
  });
}

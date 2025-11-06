import axios from 'axios';

export const getLocation = async (name: string) => {
  const { data } = await axios.get(
    'https://geocoding-api.open-meteo.com/v1/search',
    {
      params: {
        name,
      },
    }
  );
  return data;
};

import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import search from '../assets/images/icon-search.svg';
import { getLocation } from '../api/searchService';

function Search() {
  const [query, setQuery] = useState('');
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: getLocation,
    onSuccess: (data) => {
      const result = data.results[0];
      const lat = result.latitude;
      const lon = result.longitude;
      const name = result.name;
      const timezone = result.timezone;

      queryClient.setQueryData(['location'], { lat, lon, name, timezone });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    mutation.mutate(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="lg:flex justify-center">
      <div className="grid gap-3 lg:flex lg:w-[700px]">
        <div className="flex px-5 w-full rounded-lg bg-(--card-bg)">
          <img className="mr-5 w-5" src={search} alt="" />
          <input
            className="focus:outline-none min-h-12"
            type="text"
            placeholder="Search for a place..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full px-5 py-3 bg-[#4657D9] rounded-lg lg:w-fit"
        >
          {mutation.isPending ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
}

export default Search;

import search from '../assets/images/icon-search.svg';

function Search() {
  return (
    <div className="grid gap-3">
      <div className="flex px-5 py-3 w-full rounded-lg bg-(--card-bg)">
        <img className="mr-5 w-5" src={search} alt="" />
        <input
          className="border-none"
          type="text"
          placeholder="Search for a place..."
        />
      </div>
      <button className="w-full px-5 py-3 bg-[#4657D9] rounded-lg">
        Search
      </button>
    </div>
  );
}

export default Search;

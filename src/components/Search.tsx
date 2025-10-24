import search from '../assets/images/icon-search.svg';

function Search() {
  return (
    <div className="flex justify-center">
      <div className="flex px-5 py-2 rounded-lg w-1/2 bg-(--card-background)">
        <img className="mr-5 w-5" src={search} alt="" />
        <input type="text" placeholder="Search for a place..." />
      </div>
      <button className="ml-3 px-5 py-3 bg-[#4657D9] rounded-lg">Search</button>
    </div>
  );
}

export default Search;

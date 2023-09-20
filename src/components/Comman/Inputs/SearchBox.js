function SearchBox({ setSearchbool, placeholder, search, setSearch }) {
  return (
    <div className="flex flex-col w-full items-end gap-3">
      <div className="flex flex-row items-center justify-between px-2.5 h-10 border bg-white rounded-10px w-full">
        <img src="/assets/svg/search.svg" alt="" className="h-4 mr-2.5" />
        <input
          placeholder={placeholder}
          value={search?.searchText}
          name="search"
          className="text-xs font-lato bg-transparent placeholder:text-primary-gray-250 w-11/12 focus:outline-none border-0 border-primary-gray-250"
          onChange={(e) => {
            e.target.value = e.target.value.trimStart();
            setSearch({
              ...search,
              searchText: e.target.value,
              isSearch: e.target.value !== "",
            });
            setSearchbool && setSearchbool(true);
          }}
        ></input>
      </div>
    </div>
  );
}

export default SearchBox;

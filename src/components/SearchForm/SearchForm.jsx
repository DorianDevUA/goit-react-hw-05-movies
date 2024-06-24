import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query') ?? '';

  // const handleChange = evt => {
  //   const query = evt.target.value;
  //   const nextQuery = query !== '' ? { query } : {};
  //   setSearchParams(nextQuery);
  //   // query === '' ? setSearchParams({}) : setSearchParams({ query });
  // };

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.target;
    const searchQuery = form.elements.search.value;

    updateQueryString(searchQuery);
    form.reset();
  };

  const updateQueryString = query => {
    const nextQuery = query !== '' ? { query } : {};
    setSearchParams(nextQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        // value={query}
        // onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

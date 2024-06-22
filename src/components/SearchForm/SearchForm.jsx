import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleChange = evt => {
    const query = evt.target.value;
    query === '' ? setSearchParams({}) : setSearchParams({ query });
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;

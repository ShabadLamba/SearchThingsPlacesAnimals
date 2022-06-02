import { useState } from 'react';
import Universities from './../universities/universities';

const SearchBar = (prop) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    setSearchValue(e.target[0].value);
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label name='search' id='search'>
          Search {prop.appName}
        </label>
        <input
          placeholder='Enter a country'
          name='search'
          id='search'
          type='text'
        />
        <button>Fetch list</button>
      </form>
      <div>
        {' '}
        <Universities searchValue={searchValue}></Universities>
      </div>
    </div>
  );
};

export default SearchBar;

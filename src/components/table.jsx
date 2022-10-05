import React, { useState } from 'react';

//Components
import Search from './search';
import Users from './users';

const Table = () => {
  const [searchItem, setSearchItem] = useState('');
  const onSearchHandler = (searchItem) => {
    setSearchItem(searchItem);
  };

  return (
    <>
      <Search onSearchHandler={onSearchHandler} />
      <Users searchItem={searchItem} />
    </>
  );
};

export default Table;

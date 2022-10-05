import React, { useRef } from 'react';

function Search({ onSearchHandler }) {
  const searchItemRef = useRef(null);

  const handleSearchInput = () => {
    const searchValue = searchItemRef.current.value;
    onSearchHandler(searchValue);
  };

  return (
    <section>
      <br />
      <div className="container">
        <div className="row">
          <div id="custom-search-input">
            <div className="input-group col-md-12">
              <input
                className="search-query form-control"
                type="text"
                placeholder="Search User"
                data-testid="search"
                ref={searchItemRef}
                onChange={handleSearchInput}
              />
              <span className="input-group-btn m-b">
                <button className="btn btn-danger" type="button">
                  <span className=" glyphicon glyphicon-search">
                    Search User
                  </span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <br />
    </section>
  );
}

export default Search;

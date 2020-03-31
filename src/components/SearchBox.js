import React from 'react';

const SearchBox =({searchChange}) => {
    return (
        <div className="searchbox">
            <input type="text" className="input" placeholder="Search..."  onChange={searchChange} />
        </div>
    );
}

export default SearchBox; 
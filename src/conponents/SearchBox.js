import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input 
        className="pa2 ba b--white bw2 br2" 
        type="search" 
        placeholder="Search Robot"
        value={ searchfield }
        onChange={ searchChange }
      />
    </div>
  )
}

export default SearchBox;
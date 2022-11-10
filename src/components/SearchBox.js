import React from 'react';

const SearchBox = (props) => {
	return (
		<div className=' search'>
            <h3>search</h3>
			<input
				className='searchInput'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Type to search movie'
			></input>
		</div>
	);
};

export default SearchBox;
import React from 'react'

const Searchbox = ({search}) => {
	return(
		<div className = "pa3">
			<input
			className="pa3 ba b--green bg-lightest-blue" 
			type="search" 
			placeholder="Search Robots" 
			onChange = {search}
			/>
		</div>
	);
}

export default Searchbox;
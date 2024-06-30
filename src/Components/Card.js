import React from 'react'

const Card = ({name, email, id}) => {
	return (
		<div className = 'tc bg-light-green dib pa3 bw2 br3 shadow-5 ma2 grow'>
			<img src={`https://robohash.org/${id}?200x200`} alt="robot"/>
			<div>
				<h1>{name}</h1>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card; 
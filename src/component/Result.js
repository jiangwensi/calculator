import React from 'react';

const Result = ({ result, history }) => {
	return (
		<div>
			<div className='display-4 text-right' style={{ height: '4rem' }}>
				{history}
			</div>
			<div className='display-1 text-right'>{result}</div>
		</div>
	);
};

export default Result;

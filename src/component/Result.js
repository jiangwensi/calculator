import React from 'react';

const Result = ({ result, history }) => {
	return (
		<div className='border rounded'>
			<div className='h1 text-right text-break mt-2 mb-0' style={{ height: '5rem', lineHeight: '2.5rem' }}>
				{history}
			</div>
			<div className='display-1 text-right my-0 py-0'>{result}</div>
		</div>
	);
};

export default Result;

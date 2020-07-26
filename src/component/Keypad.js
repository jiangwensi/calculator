import React from 'react';

const KeyPad = ({ onClickKey }) => {
	const firstColumn = ' offset-sm-2 ';
	const column = ' h1 col-3 col-sm-2 border rounded my-0 py-3';
	const white = ' bg-white ';
	const light = ' bg-light ';
	const keyClassNameFirstCol = 'col-3 col-sm-2 offset-sm-2 py-3 h1 border rounded my-0 bg-light';
	const keyClassName = 'col-3 col-sm-2 py-3 h1 border rounded my-0 bg-light';
	const keyClassNameWhite = 'col-3 col-sm-2 py-3 h1 border rounded my-0 bg-white';

	return (
		<div className='container'>
			<div className='row text-center'>
				<button className={firstColumn + column + light} onClick={(e) => onClickKey('C')}>
					C
				</button>
				<button className={column + light} onClick={(e) => onClickKey('+/-')}>
					+/-
				</button>
				<button className={column + light} onClick={(e) => onClickKey('%')}>
					%
				</button>
				<button className={column + light} onClick={(e) => onClickKey('/')}>
					/
				</button>
			</div>
			<div className='row text-center'>
				<button className={firstColumn + column + white} onClick={(e) => onClickKey(7)}>
					7
				</button>
				<button className={column + white} onClick={(e) => onClickKey(8)}>
					8
				</button>
				<button className={column + white} onClick={(e) => onClickKey(9)}>
					9
				</button>
				<button className={column + light} onClick={(e) => onClickKey('x')}>
					x
				</button>
			</div>
			<div className='row text-center'>
				<button className={firstColumn + column + white} onClick={(e) => onClickKey(4)}>
					4
				</button>
				<button className={column + white} onClick={(e) => onClickKey(5)}>
					5
				</button>
				<button className={column + white} onClick={(e) => onClickKey(6)}>
					6
				</button>
				<button className={column + light} onClick={(e) => onClickKey('-')}>
					-
				</button>
			</div>
			<div className='row text-center'>
				<button className={firstColumn + column + white} onClick={(e) => onClickKey(1)}>
					1
				</button>
				<button className={column + white} onClick={(e) => onClickKey(2)}>
					2
				</button>
				<button className={column + white} onClick={(e) => onClickKey(3)}>
					3
				</button>
				<button className={column + light} onClick={(e) => onClickKey('+')}>
					+
				</button>
			</div>
			<div className='row text-center'>
				<button className={`${firstColumn + column + white} col-6 col-sm-4`} onClick={(e) => onClickKey(0)}>
					0
				</button>
				<button className={column + white} onClick={(e) => onClickKey('.')}>
					.
				</button>
				<button className={column + light} onClick={(e) => onClickKey('=')}>
					=
				</button>
			</div>
		</div>
	);
};

export default KeyPad;

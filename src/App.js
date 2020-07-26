import React from 'react';
import Result from './component/Result';
import Keypad from './component/Keypad';

class App extends React.Component {
	state = { result: 0, history: '' };

	onClickKey = (key) => {
		if (key === 'C') {
			this.setState({ result: 0, history: '' });
			return;
		}

		if (key === '=') {
			let evaluatedResult = 0;
			try {
				evaluatedResult = eval(this.state.history.split('x').join('*'));
				if (evaluatedResult === undefined) {
					evaluatedResult = 0;
				}
				this.setState({
					result: evaluatedResult,
					history: evaluatedResult
				});
			} catch (err) {
				this.setState({ result: 'Error' });
			}
			return;
		}

		this.setState({
			history: this.state.history + key
		});

		if (this.isNumber(key)) {
			this.setState({ result: key });
		}
	};

	isNumber = (key) => {
		switch (key) {
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				return true;
			default:
				return false;
		}
	};

	render() {
		console.log(this.state);
		const { result, currNum, currOperator, history } = this.state;
		return (
			<div className='container pt-3'>
				<Result result={result} currNum={currNum} currOperator={currOperator} history={history} />
				<Keypad onClickKey={this.onClickKey} />
			</div>
		);
	}
}

export default App;

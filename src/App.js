import React from 'react';
import Result from './component/Result';
import Keypad from './component/Keypad';
import Footer from './component/Footer';

class App extends React.Component {
	state = { result: 0, history: '' };

	onClickKey = (key) => {
		if (key === 'C') {
			return this.reset();
		}

		if (key === '=') {
			return this.calculate();
		}

		this.setState({
			history: this.state.history + key.toString()
		});
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

	calculate() {
		let evaluatedResult = this.state.history;
		try {
			evaluatedResult = eval(
				evaluatedResult.toString().split('%').join('*0.01').split('+/-').join('*(-1)').split('x').join('*')
			);
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

	reset() {
		this.setState({ result: 0, history: '' });
	}

	render() {
		const { result, currNum, currOperator, history } = this.state;
		return (
			<React.Fragment>
				<div className='container pt-3'>
					<Result result={result} currNum={currNum} currOperator={currOperator} history={history} />
					<Keypad onClickKey={this.onClickKey} />
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;

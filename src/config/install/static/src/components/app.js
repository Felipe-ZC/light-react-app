import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increase, decrease } from '../redux/actions'

class App extends Component { 
	constructor(props) {
		super(props);
		console.log(props);
		this.handleInc = this.handleInc.bind(this);
		this.handleDec = this.handleDec.bind(this);
	};

	handleInc(){
		this.props.increase();
		console.log(this.props.count);
	}

	handleDec(){
		this.props.decrease();
		console.log(this.props.count);
	}

	render() {
		return (
			<div className="counter-app">
				<h1>Count Something!</h1>
				<i className="fas fa-star"></i>
				<button 
					onClick={this.handleDec}>
				  &#45;	
				</button>
				<span>
					{this.props.count}
				</span>
				<button 
					onClick={this.handleInc}>
					&#43;
				</button>
			</div>
		);
	}
};

export default connect(
		store => store, // Map state to props
		{ increase, decrease } // Map dispatch to props
	)(App);

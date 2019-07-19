import React, {Component} from 'react';
import Moves from "../Moves/Moves";
import classes from './Layout.module.css'

class Layout extends Component {

	state = {
		humanScore: 0,
		botScore: 0,
		humanChoice: '',
		botChoice: '',
		result: '',
	};
	moves = [
		{label: "ROCK", type: "rock"},
		{label: "PAPER", type: "paper"},
		{label: "SCISSOR", type: "scissor"},
	];

	humanWon = () => {
		this.setState((prevState) => {
			return {humanScore: prevState.humanScore + 1}
		});
		console.log(this.state.humanScore);

	};

	resultHandler = (label) => {

		let botChoice = Array(...this.moves).map(lab => {
			return lab.label
		})[Math.floor(Math.random() * 3)];

		let result = '';

		this.setState({botChoice:botChoice});

		switch (label + botChoice) {
			case 'ROCKSCISSOR':
				result = 'Win';
				return this.setState((prevScore) => {
					return {humanScore: prevScore.humanScore + 1, result: result}
				});
			case 'SCISSORPAPER':
				result = 'Win';
				return this.setState((prevScore) => {
					return {humanScore: prevScore.humanScore + 1, result: result}
				});

			case 'PAPERROCK':
				result = 'Win';
				return this.setState((prevScore) => {
					return {humanScore: prevScore.humanScore + 1, result: result}
				});
			case 'SCISSORROCK':
				result = 'Loose';
				return this.setState((prevScore) => {
					return {botScore: prevScore.botScore + 1, result: result}
				});
			case 'ROCKPAPER':
				result = 'Loose';
				return this.setState((prevScore) => {
					return {botScore: prevScore.botScore + 1, result: result}
				});
			case 'PAPERSCISSOR':
				result = 'Loose';
				return this.setState((prevScore) => {
					return {botScore: prevScore.botScore + 1, result: result}
				});
			default:
				result = 'Tie';
				return this.setState({result: result});
		}

	};

	render() {

		return (
			<div className={classes.mainContent}>
				<p>Hi, This is a Rock-Paper-Scissor Game made totally with ReactJS</p>
				<Moves
					clicked={this.resultHandler}
					adding={this.humanWon}
					showBot={this.state.Choose}
					choice={this.state.humanChoice}
					moves={this.moves}
				/>
				<div className={classes.subContent} ><h1 className={classes[this.state.result]}>{this.state.result}</h1>
				{this.state.botChoice}
				<h2>Human Score: {this.state.humanScore}</h2>
				<h2>Bot Score: {this.state.botScore}</h2>
				</div>
			</div>

		);
	}
}

export default Layout;

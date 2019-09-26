import React, { Component } from 'react';
import Card from './Card';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faStar,
	faRedo,
	faLeaf,
	faPaperPlane,
	faAnchor,
	faPaw,
	faBolt,
	faRocket,
	faBicycle,
	faBomb
} from '@fortawesome/free-solid-svg-icons';

import './App.css';

library.add(faStar, faRedo, faLeaf, faPaperPlane, faAnchor, faPaw, faBolt, faRocket, faBicycle, faBomb);

const myIcons = [
	'rocket',
	'paper-plane',
	'anchor',
	'paw',
	'bolt',
	'anchor',
	'leaf',
	'bicycle',
	'rocket',
	'bomb',
	'leaf',
	'bomb',
	'bolt',
	'bicycle',
	'paper-plane',
	'paw'
];
//Durstenfeld shuffle
function shuffle(array) {
	let newArr = array.slice();
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[ newArr[i], newArr[j] ] = [ newArr[j], newArr[i] ];
	}
	return newArr;
}
class App extends Component {
	state = {
		isFlipped: new Array(16).fill(false),
		cards: shuffle(myIcons.slice()),
		matched: [],
		counter: 0
	};

	handleClick = (id) => {
		const { isFlipped, cards, matched } = this.state;
		const flip = isFlipped;
		flip[id] = true;
		let cardsFlipped = 0;

		flip.forEach((e) => {
			if (e === true) {
				cardsFlipped++;
			} else {
				return;
			}
		});
		if (cardsFlipped < 3) {
			this.setState({
				isFlipped: flip
			});

			//checking for match
			const openCard = cards.filter((y, i) => isFlipped[i]);

			if (openCard.length === 2) {
				if (this.match(openCard)) {
					this.setState({
						matched: [ ...matched, openCard[0] ]
					});
					console.log(openCard[0]);
					const newCards = cards.filter((card) => !matched.includes(card));
					this.setState({
						cards: newCards,
						isFlipped: new Array(cards.length).fill(false)
					});
				} else {
					setTimeout(() => this.setState({ isFlipped: new Array(cards.length).fill(false) }), 1500);
				}
			}
		} else {
			return;
		}
	};

	match = (arr) => {
		return arr.every((val, i, array) => val === array[0]);
	};

	newGame = () => {
		this.setState({
			isFlipped: new Array(16).fill(false),
			cards: shuffle(myIcons.slice()),
			matched: [],
			counter: 0
		});
	};

	render() {
		const { cards, matched, isFlipped } = this.state;
		return (
			<div className="App">
				<h2>Matching Game</h2>
				<div className="rating">
					<div className="timer" />
					<div className="redo" onClick={this.newGame}>
						New Game
						<FontAwesomeIcon className="redo-icon" icon={faRedo} />
					</div>
				</div>
				<div className="deck" id="card-deck">
					{cards.map((icon, id) => (
						<Card
							key={`${icon}-${id}`}
							handleClick={this.handleClick}
							id={id}
							icon={icon}
							matched={matched}
							isFlipped={isFlipped[id]}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;

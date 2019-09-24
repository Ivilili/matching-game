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
		flipped: [],
		matched: [],
		counter: 0
	};

	handleClick = (id) => {
		const { isFlipped, cards } = this.state;
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
			//if only 2 are flipped it continues on
			this.setState({
				isFlipped: flip
			});
		}
		//checking for match
		const openCard = cards.filter((_, i) => isFlipped[i]);
		console.log(openCard);
		if (openCard.length === 2) {
			if (openCard[0] === openCard[1]) {
				this.setState({
					matched: [ openCard[0], openCard[1] ]
				});
			} else {
				setTimeout(() => this.setState({ isFlipped: new Array(16).fill(false) }), 1500);
			}
		}
	};
	match = (arr) => {
		return arr.every((val, i, array) => val === array[0]);
	};

	render() {
		const { cards, matched, flipped } = this.state;
		return (
			<div className="App">
				<h2>Matching Game</h2>
				<div className="rating">
					<div className="star">
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faStar} />
					</div>
					<span className="moves">0 Move(s)</span>
					<div className="timer">Time</div>
					<div className="redo">
						<FontAwesomeIcon icon={faRedo} />
					</div>
				</div>
				<div className="deck" id="card-deck">
					{cards.map((icon, id) => (
						<Card
							key={id}
							handleClick={this.handleClick}
							id={id}
							icon={icon}
							flipped={flipped}
							matched={matched}
							isFlipped={this.state.isFlipped[id]}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;

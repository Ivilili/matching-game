import React, { Component } from 'react';
import Card from './Card';
import Deck from './Deck';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faRedo,
	faStar,
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

class App extends Component {
	constructor() {
		super();
		this.state = {
			cards: [],
			matched: [],
			flipped: [],
			counter: 0,
			disabled: false
		};
	}
	UNSAFE_componentWillMount() {
		this.newGame();
	}

	//Durstenfeld shuffle
	shuffle = (array) => {
		let newArr = array.slice();
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[ newArr[i], newArr[j] ] = [ newArr[j], newArr[i] ];
		}
		return newArr;
	};

	newGame = () => {
		this.setState({
			cards: this.shuffle(Deck()),
			matched: [],
			flipped: [],
			counter: 0,
			disabled: false
		});
	};

	match = (id) => {
		const { cards, flipped } = this.state;
		const clickedCard = cards.find((card) => card.id === id);
		const flippedCard = cards.find((card) => flipped[0] === card.id);
		return flippedCard.icon === clickedCard.icon;
	};

	handleClick = (id) => {
		const { matched, flipped, counter } = this.state;

		this.setState({
			disabled: true
		});
		const sameCardClicked = (id) => {
			this.state.flipped.includes(id);
		};

		if (flipped.length === 0) {
			this.setState({
				flipped: [ id ],
				disabled: false
			});
		} else {
			if (sameCardClicked(id)) return;

			this.setState({
				flipped: [ flipped[0], id ],
				counter: counter + 1
			});

			if (this.match(id)) {
				this.setState({
					matched: [ ...matched, flipped[0], id ]
				});
				this.resetCards();
			} else {
				setTimeout(this.resetCards, 750);
			}
		}
	};

	resetCards = () => {
		this.setState({
			flipped: [],
			disabled: false
		});
	};

	render() {
		const { cards, matched, disabled, flipped } = this.state;

		return (
			<div className="App">
				<h2>Matching Game</h2>
				<div className="rating">
					<div className="moves">Moves: {this.state.counter}</div>
					<div className="redo" title="Play Again" onClick={this.newGame}>
						<FontAwesomeIcon className="redo-icon" icon={faRedo} />
					</div>
				</div>

				<div className="deck" id="card-deck">
					{cards.map((card) => (
						<Card
							key={card.id}
							handleClick={this.handleClick}
							id={card.id}
							icon={card.icon}
							matched={matched.includes(card.id)}
							flipped={flipped.includes(card.id)}
							disabled={disabled || matched.includes(card.id)}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;

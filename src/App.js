import React from 'react';
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

function App() {
	return (
		<div className="App">
			<h1>Matching Game</h1>
			<div className="rating score-panel">
				<div>
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
					<FontAwesomeIcon icon={faStar} />
				</div>
				<span className="moves">0</span> Move(s)
				<div className="timer">Time</div>
				<div className="redo">
					<FontAwesomeIcon icon={faRedo} />
				</div>
			</div>
			<div className="deck" id="card-deck">
				<div className="card">
					<FontAwesomeIcon icon={faRocket} size="3x" className="rocket" />{' '}
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faPaperPlane} size="3x" className="paper-plane" />
				</div>
				<div className="card match">
					<FontAwesomeIcon icon={faAnchor} size="3x" className="anchor" />{' '}
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faPaw} size="3x" className="paw" />{' '}
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faBolt} size="3x" className="bolt" />{' '}
				</div>
				<div className="card match">
					<FontAwesomeIcon icon={faAnchor} size="3x" className="anchor" />
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faLeaf} size="3x" className="leaf" />
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faBicycle} size="3x" className="bicycle" />
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faRocket} size="3x" className="rocket" />{' '}
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faBomb} size="3x" className="bomb" />
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faLeaf} size="3x" className="leaf" />
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faBomb} size="3x" className="bomb" />
				</div>
				<div className="card open show">
					<FontAwesomeIcon icon={faBolt} size="3x" className="bolt" />
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faBicycle} size="3x" className="bicycle" />
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faPaperPlane} size="3x" className="paper-plane" />
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faPaw} size="3x" className="paw" />
				</div>
			</div>
		</div>
	);
}

export default App;

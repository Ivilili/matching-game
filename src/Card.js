import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card({ id, icon, handleClick, isFlipped }) {
	const cardClick = () => {
		handleClick(id);
	};
	const visible = isFlipped ? 'front' : 'back';
	return (
		<div className={`card ${visible}`} onClick={cardClick}>
			<div className="front-icon">
				<FontAwesomeIcon icon={icon} size="3x" />
			</div>
		</div>
	);
}

export default Card;

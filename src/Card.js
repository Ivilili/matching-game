import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card({ id, icon, handleClick, flipped, disabled, matched }) {
	const visible = flipped || matched ? 'front' : 'back';
	return (
		<div className={`card ${visible}`} onClick={() => (disabled ? null : handleClick(id))}>
			<div className="font-icon">
				<FontAwesomeIcon icon={icon} size="3x" />
			</div>
		</div>
	);
}

export default Card;

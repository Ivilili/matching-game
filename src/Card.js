import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card({ id, icon, handleClick, flipped, matched }) {
	const visible = flipped || matched ? 'front' : 'back';

	return (
		<div className={`card ${visible}`} onClick={() => handleClick(id)}>
			<div className="font-icon">
				<FontAwesomeIcon icon={icon} className="icon" />
			</div>
		</div>
	);
}

export default Card;

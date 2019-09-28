import { library } from '@fortawesome/fontawesome-svg-core';

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

library.add(faStar, faRedo, faLeaf, faPaperPlane, faAnchor, faPaw, faBolt, faRocket, faBicycle, faBomb);

export default function Deck() {
	let id = 0;

	const cards = [
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
	].reduce((acc, icon) => {
		acc.push({
			id: id++,
			icon
		});
		return acc;
	}, []);
	return cards;
}

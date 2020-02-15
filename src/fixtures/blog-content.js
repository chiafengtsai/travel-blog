import dayOne from './day-one';
import dayTwo from './day-two';
import dayThree from './day-three';
import dayFour from './day-four';

const content = [
	{
		name: 'Hero',
		title: 'New Zealand',
		subtitle: 'A wonderful trip to',
		url: '//live.staticflickr.com/65535/49515266146_f3d23a1712_k.jpg'
	},
	...dayOne,
	...dayTwo,
	...dayThree,
	...dayFour
];

export default content;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faSketch } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEvernote } from '@fortawesome/free-brands-svg-icons';

import { forwardRef } from 'react';

const Panels = forwardRef((_, ref) => {
	//props로 전달받을값없음, ref로 부모요소인 Apps에게 ul요소전달
	return (
		<ul className='panel' ref={ref}>
			<li className='on'>
				<div className='bg'></div>
			</li>
			<li>
				<div className='bg'></div>
			</li>
			<li>
				<div className='bg'></div>
			</li>
			<li>
				<div className='bg'></div>
			</li>
		</ul>
	);
});

export default Panels;

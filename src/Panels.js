import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faSketch } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEvernote } from '@fortawesome/free-brands-svg-icons';

import { forwardRef } from 'react';
//1. li에 넣을 icon배열만들기
const icons = [faGitAlt, faSketch, faTwitter, faEvernote];

const Panels = forwardRef((_, ref) => {
	//props로 전달받을값없음, ref로 부모요소인 Apps에게 ul요소전달
	return (
		<ul className='panel' ref={ref}>
			{/*2. li에icon넣어돌리기 */}
			{icons.map((icon, idx) => (
				<li key={idx}>
					<div className='bg'>
						<FontAwesomeIcon icon={icon} />
					</div>
				</li>
			))}
		</ul>
	);
});

export default Panels;

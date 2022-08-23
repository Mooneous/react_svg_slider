import './scss/style.scss';
import Btns from './Btns';
import Panels from './Panels';
import { useRef } from 'react';

function App() {
	const panel = useRef(null);
	return (
		<main>
			<h1>
				TYPHOGRAPHY <strong>DESIGN</strong>
			</h1>
			{/*부모요소Apps는 Panels의ul을 참조객체panel에 담아서 Btns컴포넌트에 전달 */}
			<Btns panel={panel} />
			<Panels ref={panel} />
		</main>
	);
}

export default App;

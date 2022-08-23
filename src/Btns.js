import { useRef, useEffect } from 'react';

function Btns(props) {
	const delay = 800;
	const enableClick = useRef(true);

	const getItems = (item) => {
		const panel = item.current;
		const panel_items = panel.children;
		const items = Array.from(panel_items);
		const len = items.length;
		const current_item = panel.querySelector('.on');
		const current_index = items.indexOf(current_item);
		return [panel, panel_items, len, current_item, current_index];
	};

	const moveUp = () => {
		if (!enableClick.current) return;
		enableClick.current = false;
		const [panel, panel_items, len, current_item, current_index] = getItems(props.panel);
		let next_index = null;
		current_index !== len - 1 ? (next_index = current_index + 1) : (next_index = 0);

		current_item.classList.remove('on');
		current_item.classList.add('up');
		panel_items[next_index].classList.add('down');

		setTimeout(() => {
			panel_items[next_index].classList.remove('down');
			panel_items[next_index].classList.add('on');
			panel.querySelector('.up').classList.remove('up');
			setTimeout(() => {
				enableClick.current = true;
			}, delay);
		}, delay);
	};

	const moveDown = () => {
		if (!enableClick.current) return;
		enableClick.current = false;
		const [panel, panel_items, len, current_item, current_index] = getItems(props.panel);
		let prev_index = null;
		current_index !== 0 ? (prev_index = current_index - 1) : (prev_index = len - 1);

		current_item.classList.remove('on');
		current_item.classList.add('down');
		panel_items[prev_index].classList.add('up');

		setTimeout(() => {
			panel_items[prev_index].classList.remove('up');
			panel_items[prev_index].classList.add('on');
			panel.querySelector('.down').classList.remove('down');

			setTimeout(() => {
				enableClick.current = true;
			}, delay);
		}, delay);
	};

	useEffect(() => {
		props.panel.current.children[0].classList.add('on');
	}, []);

	return (
		<>
			<a href='#' className='btnUp' onClick={moveUp}>
				<span></span>
				<em>UP</em>
			</a>
			<a href='#' className='btnDown' onClick={moveDown}>
				<span></span>
				<em>DOWN</em>
			</a>
		</>
	);
}

export default Btns;

function Btns(props) {
	const delay = 800;
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
		const [panel, panel_items, len, current_item, current_index] = getItems(props.panel);
		//console.log('panel', panel);
		//console.log('panel_items', panel_items);
		//console.log('len', len);
		//console.log('current_item', current_item);
		//console.log('current_index', current_index);
		//len값(li의개수4)-1은 3, 3이 현재인덱스값과 같지않으면 인덱스값+1하고, 같으면 마지막패널이니까 0으로 만들어줘~
		let next_index = null;
		current_index !== len - 1 ? (next_index = current_index + 1) : (next_index = 0);

		//기존 활성화 패널을 위로 올려서 숨기고 앞으로 활성화될 패널을 아래쪽에 배치해서 초기화
		current_item.classList.remove('on');
		current_item.classList.add('up');
		panel_items[next_index].classList.add('down');

		setTimeout(() => {
			panel_items[next_index].classList.remove('down');
			panel_items[next_index].classList.add('on');
			panel.querySelector('.up').classList.remove('up');
		}, delay);
	};

	const moveDown = () => {
		const [panel, panel_items, len, current_item, current_index] = getItems(props.panel);
		//현재 인덱스값이 0이 아니면 첫패널 아니므로 -1해주고, 0이면 첫패널인거고 len-1=3으로 그니까 마지막패널로 가즈아~
		let prev_index = null;
		current_index !== 0 ? (prev_index = current_index - 1) : (prev_index = len - 1);

		//기존 활성화 패널을 아래로 내려서 숨기고 앞으로 활성화될 패널을 위쪽에 배치해서 초기화
		current_item.classList.remove('on');
		current_item.classList.add('down');
		panel_items[prev_index].classList.add('up');

		setTimeout(() => {
			panel_items[prev_index].classList.remove('up');
			panel_items[prev_index].classList.add('on');
			panel.querySelector('.down').classList.remove('down');
		}, delay);
	};

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

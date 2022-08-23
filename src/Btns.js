function Btns(props) {
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
		console.log('panel', panel);
		console.log('panel_items', panel_items);
		console.log('len', len);
		console.log('current_item', current_item);
		console.log('current_index', current_index);
	};
	return (
		<>
			<a href='#' className='btnUp' onClick={moveUp}>
				<span></span>
				<em>UP</em>
			</a>
			<a href='#' className='btnDown'>
				<span></span>
				<em>DOWN</em>
			</a>
		</>
	);
}

export default Btns;

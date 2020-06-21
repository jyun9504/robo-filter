import React from 'react';

import './Scroll.css';

const Scroll = (props) => {
	return (
		<div className="scroll-block br3">
			{ props.children }
		</div>
	)
}

export default Scroll;
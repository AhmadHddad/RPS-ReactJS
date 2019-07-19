import React from 'react'
import Move from "./Move/Move";


const Moves = (props) => {

	const mapping = props.moves.map((ctrl) => {
		return (
			<Move
				key={ctrl.type}
				label={ctrl.label}
				type={ctrl.type}
				clicked={() => {
					props.clicked(ctrl.label);
				}}
			/>
		)
	});

	return (
		<React.Fragment>
			<div>
				{mapping}
			</div>

		</React.Fragment>
	)

};

export default Moves;

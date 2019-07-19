import React from 'react'
import classes from "./Move.module.css";


const Move = (props) => {

	return (
		<React.Fragment>
			<p onClick={props.clicked} className={classes[props.type]}>{props.label}</p>
		</React.Fragment>
	);
};

export default Move;

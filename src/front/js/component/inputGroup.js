import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
//import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/login.scss";
import { PropTypes } from "prop-types";

export const InputGroup = props => {
	const [palabra, setPalabra] = useState("");
	return (
		<div className="container-fluid d-flex flex-column align-items-center p-2 mb-0 bg-white">
			<h6 className="text-left align-self-start">{props.label}</h6>
			<div className="input-group form-group">
				<div className="input-group-prepend">
					<span className="input-group-text">
						<i className={props.icon} />
					</span>
				</div>
				<input
					type={props.type}
					className="form-control"
					placeholder={props.placeholder}
					id={props.name}
					onChange={e => setPalabra(e.target.value)}
					value={palabra}
				/>
			</div>
		</div>
	);
};

InputGroup.propTypes = {
	label: PropTypes.string,
	icon: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	name: PropTypes.string
};

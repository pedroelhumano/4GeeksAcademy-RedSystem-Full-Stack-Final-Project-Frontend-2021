import React from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/app.scss";

export const Listastotal = props => {
	return (
		<li className="list-group-item row">
			<div className="col">
				<div className={"float-left circle mx-1 " + props.status + ""} />
				<div className="float-left mx-1">{props.id_nombre}</div>
				<div className="float-left mx-1">{props.perfil}</div>
			</div>
			<div className="float-right">
				<Link to={props.url_info}>
					<button type="button" className="btn btn-secondary mx-1">
						Información
					</button>
				</Link>
				<Link to={props.url_orden}>
					<button type="button" className="btn btn-secondary mx-1">
						{props.textbutton2}
					</button>
				</Link>
			</div>
		</li>
	);
};

//Protypes declarado fuera de la funcion export
Listastotal.propTypes = {
	//general
	id_nombre: PropTypes.string,
	perfil: PropTypes.string,
	url_info: PropTypes.string,
	url_orden: PropTypes.string,
	textbutton2: PropTypes.string,
	status: PropTypes.string
};

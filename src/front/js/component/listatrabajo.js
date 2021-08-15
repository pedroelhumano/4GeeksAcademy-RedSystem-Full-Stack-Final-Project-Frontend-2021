import React from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/app.scss";

export const Listatrabajo = props => {
	return (
		<li className="list-group-item row">
			<div className="col">
				<div className={"float-left circle mx-1 " + props.status + ""} />
				<div className="float-left mx-1">{props.id_nombre}</div>
			</div>
			<div className="float-right">
				<Link to={props.url_info}>
					<button type="button" className="btn btn-secondary mx-1">
						Información
					</button>
				</Link>
				<Link to={props.url_orden}>
					<button type="button" className="btn btn-secondary mx-1">
						Ordenes de trabajo
					</button>
				</Link>
			</div>
		</li>
	);
};

//Protypes declarado fuera de la funcion export
Listatrabajo.propTypes = {
	//general
	id_nombre: PropTypes.string,
	url_info: PropTypes.string,
	url_orden: PropTypes.string,
	status: PropTypes.string
};

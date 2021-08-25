import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/app.scss";
import { Listatrabajo } from "../component/listatrabajo.js";

export const Ordenes = props => {
	return (
		<div className="container">
			<ul className="list-group container-fluid">
				<Listatrabajo status="bg-warning" id_nombre="MUFA-01" url_info="datos_orden" url_orden="" />
				<Listatrabajo status="bg-warning" id_nombre="MUFA-02" url_info="datos_orden" url_orden="" />
				<Listatrabajo status="bg-warning" id_nombre="NAP-01" url_info="datos_orden" url_orden="" />
				<Listatrabajo status="bg-warning" id_nombre="NAP-02" url_info="datos_orden" url_orden="" />
				<Listatrabajo status="bg-warning" id_nombre="NAP-03" url_info="datos_orden" url_orden="" />
			</ul>
		</div>
	);
};

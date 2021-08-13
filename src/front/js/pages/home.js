import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/app.scss";
//Componentes importados
import { Listatrabajo } from "../component/listatrabajo.js";

export const Home = props => {
	return (
		<div className="container">
			<ul className="list-group container-fluid">
				<Listatrabajo id_nombre="VTR-919301" url_info="datos_contrato" url_orden="ordenes" />
				<Listatrabajo id_nombre="VTR-919301" url_info="verdatoscontrato" url_orden="ordenes" />
				<Listatrabajo id_nombre="VTR-919301" url_info="verdatoscontrato" url_orden="ordenes" />
				<Listatrabajo id_nombre="VTR-919301" url_info="verdatoscontrato" url_orden="ordenes" />
				<Listatrabajo id_nombre="VTR-919301" url_info="verdatoscontrato" url_orden="ordenes" />
				<Listatrabajo id_nombre="VTR-919301" url_info="verdatoscontrato" url_orden="ordenes" />
				<Listatrabajo id_nombre="VTR-919301" url_info="verdatoscontrato" url_orden="ordenes" />
				<Listatrabajo id_nombre="VTR-919301" url_info="verdatoscontrato" url_orden="ordenes" />
				<Listatrabajo id_nombre="VTR-919301" url_info="verdatoscontrato" url_orden="ordenes" />
			</ul>
			<div className="row">
				<button type="button" className="btn btn-secondary mx-auto mt-4">
					Crear Contrato
				</button>
			</div>
		</div>
	);
};

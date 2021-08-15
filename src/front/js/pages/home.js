import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/app.scss";
//Componentes importados
import { Listatrabajo } from "../component/listatrabajo.js";
import { ModalCrearContrato } from "../component/ModalCrearContrato.js";

export const Home = props => {
	return (
		<div className="container">
			<ul className="list-group container-fluid">
				<Listatrabajo
					status="bg-warning"
					id_nombre="VTR-919301"
					url_info="datos_contrato"
					url_orden="ordenes"
				/>
				<Listatrabajo
					status="bg-warning"
					id_nombre="VTR-919301"
					url_info="datos_contrato"
					url_orden="ordenes"
				/>
				<Listatrabajo
					status="bg-warning"
					id_nombre="VTR-919301"
					url_info="datos_contrato"
					url_orden="ordenes"
				/>
				<Listatrabajo
					status="bg-warning"
					id_nombre="VTR-919301"
					url_info="datos_contrato"
					url_orden="ordenes"
				/>
				<Listatrabajo
					status="bg-success"
					id_nombre="VTR-919301"
					url_info="datos_contrato"
					url_orden="ordenes"
				/>
				<Listatrabajo status="bg-info" id_nombre="VTR-919301" url_info="datos_contrato" url_orden="ordenes" />
				<Listatrabajo status="bg-danger" id_nombre="VTR-919301" url_info="datos_contrato" url_orden="ordenes" />
			</ul>
			<div className="row">
				<ModalCrearContrato />
			</div>
		</div>
	);
};

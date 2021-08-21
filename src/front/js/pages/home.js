import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/app.scss";
//Componentes importados
import { Listatrabajo } from "../component/listatrabajo.js";
//react-bootstrap
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = props => {
	return (
		<div className="container">
			<ul className="list-group container-fluid mb-3">
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
			<div className="row justify-content-md-center">
				<div className="col-md-auto ">
					<Button variant="primary">
						<Link className="text-light" to="/crear_contrato">
							Crear contrato
						</Link>
					</Button>{" "}
				</div>
			</div>
		</div>
	);
};

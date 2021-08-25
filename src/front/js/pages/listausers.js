import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/app.scss";
//Componentes importados
import { Listastotal } from "../component/listastotal.js";
//react-bootstrap
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Listausuarios = props => {
	return (
		<div className="container">
			<ul className="list-group container-fluid mb-3">
				<Listastotal
					id_nombre="Pedro Yanez"
					perfil="Admin"
					url_info="configuracion"
					textbutton2="Editar"
					url_orden="ordenes"
				/>
				<Listastotal
					id_nombre="Luis Salgado"
					perfil="Tecnico"
					url_info="configuracion"
					textbutton2="Editar"
					url_orden="ordenes"
				/>
				<Listastotal
					id_nombre="Felipe"
					perfil="Tecnico"
					url_info="configuracion"
					textbutton2="Editar"
					url_orden="ordenes"
				/>
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

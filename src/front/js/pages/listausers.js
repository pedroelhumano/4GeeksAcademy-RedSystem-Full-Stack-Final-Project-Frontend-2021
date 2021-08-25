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
					url_orden="editar_user"
				/>
				<Listastotal
					id_nombre="Luis Salgado"
					perfil="Tecnico"
					url_info="configuracion"
					textbutton2="Editar"
					url_orden="editar_user"
				/>
				<Listastotal
					id_nombre="Felipe"
					perfil="Tecnico"
					url_info="configuracion"
					textbutton2="Editar"
					url_orden="editar_user"
				/>
			</ul>
		</div>
	);
};

import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/app.scss";
import { Listastotal } from "../component/listastotal.js";
//react-bootstrap
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Importamos la libreria axios previamente instalada
import axios from "axios";
//Aqui colocar la URL de la API por favor
import { URL } from "../config";

export const Ordenes = props => {
	//Generamos primero el uso de useState
	const [ordenes, setOrdenes] = useState([]);
	const { id } = useParams();

	const fetchOrdenes = useCallback(
		async () => {
			try {
				const { data } = await axios.get(`${URL}orders/${id}`);
				// console.log("users", data.Lista_de_usuarios);
				setOrdenes(data);
			} catch (error) {
				console.error(error);
				alert("Error en la api: No se pudo recibir la lista de Ordenes");
			}
		},
		[setOrdenes]
	);

	useEffect(
		() => {
			fetchOrdenes();
		},
		[fetchOrdenes]
	);
	return (
		<div className="container">
			<ul className="list-group container-fluid">
				{ordenes.length > 0 ? (
					ordenes.map(ordene => (
						<Listastotal
							status="bg-warning"
							id_nombre={ordene.id_nombre}
							url_info={`datos_orden/${ordene.id}`}
							textbutton2="Acreditar"
							url_orden="Editar"
							key={ordene.id} //llave necesaria para que no se tumbe react y poder iterar
						/>
					))
				) : (
					<h2>Cargando...</h2>
				)}
			</ul>
			<div className="row justify-content-md-center mt-3">
				<div className="col-md-auto ">
					<Button variant="primary">
						{/* URL de crear orden basado en un contrato en especifico}
						{/* <Link className="text-light" to={`crear_orden/${contrato.id}`}></Link> */}
						<Link className="text-light" to={`crear_orden/${id}`}>
							Crear Orden de trabajo
						</Link>
					</Button>{" "}
				</div>
			</div>
		</div>
	);
};

import React, { useState, useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

//react-bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Componentes importados
import { Crear_orden_basecontrato } from "../component/crear_orden_basecontrato";

//Aqui colocar la URL de la API por favor
import { URL } from "../config";

export const Crear_orden_page = () => {
	const [orden, setOrden] = useState(null);
	const { id } = useParams();

	const fetchIDContrato = useCallback(
		async () => {
			try {
				const { data } = await axios.get(`${URL}contrato/${id}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				});
				// console.log("user", data);
				setOrden(data);
			} catch (error) {
				console.error(error);
				alert("Error en la api: No pude traer los datos");
			}
		},
		[setOrden]
	);

	useEffect(
		() => {
			fetchIDContrato();
		},
		[fetchIDContrato]
	);

	return (
		<Container>
			{orden ? (
				<Form>
					<Crear_orden_basecontrato id={id} id_nombre="" tipo="" descripcion="" direccion="" status="" />
				</Form>
			) : (
				<h2>Cargando</h2>
			)}
		</Container>
	);
};

import React, { useState, useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

//react-bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Componentes importados
import { Crearordeninv } from "../component/Crearordeninv";

//Aqui colocar la URL de la API por favor
import { URL } from "../config";

export const Editarorden = () => {
	const [orden, setOrden] = useState(null);
	const { id } = useParams();

	const fetchOrden = useCallback(
		async () => {
			try {
				const { data } = await axios.get(`${URL}order/${id}`);
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
			fetchOrden();
		},
		[fetchOrden]
	);

	return (
		<Container>
			{orden ? (
				<Form>
					<Crearordeninv
						id={id}
						id_nombre={orden.id_nombre}
						tipo={orden.tipo}
						descripcion={orden.descripcion}
						direccion={orden.direccion}
						status={orden.status}
					/>
				</Form>
			) : (
				<h2>Cargando</h2>
			)}
		</Container>
	);
};

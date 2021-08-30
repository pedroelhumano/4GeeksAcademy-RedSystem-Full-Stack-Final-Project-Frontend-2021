import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/app.scss";
//Importamos la libreria axios previamente instalada
import axios from "axios";
//react-bootstrap
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Aqui colocar la URL de la API por favor
import { URL } from "../config";
//Componente importado
import { Datos_orden_component } from "../component/datos_orden_component";

export const Datos_orden = props => {
	const [orden, setOrden] = useState(null);
	const { id } = useParams();
	const fetchOrden = useCallback(
		async () => {
			try {
				const { data } = await axios.get(`${URL}order/${id}`);
				// console.log("users", data.Lista_de_usuarios);
				setOrden(data);
			} catch (error) {
				console.error(error);
				alert("Error en la api: No se pudo recibir informacion de la orden");
			}
		},
		[setOrden]
	);

	useEffect(
		() => {
			// console.log("id", id);
			fetchOrden();
		},
		[fetchOrden]
	);
	return (
		<>
			{orden ? (
				<>
					<Datos_orden_component
						id={Number(id)}
						id_nombre={orden.id_nombre}
						tipo={orden.tipo}
						descripcion={orden.descripcion}
						direccion={orden.direccion}
						status={orden.status}
						tecnicos_asignados={orden.tecnicos_asignados}
						//De la tabla contrato deberia extraer:
						// region={orden.planta_matriz}
						// comuna={orden.comentario}
						// sector={orden.fecha_registro}
						// direccion={orden.fecha_registro}
					/>
					<Container>
						<Form>
							<Button className="my-3" variant="primary">
								<Link className="text-light" to={`../editar_orden/${Number(id)}`}>
									Editar
								</Link>
							</Button>{" "}
						</Form>
					</Container>
				</>
			) : (
				<h2>Cargando...</h2>
			)}
		</>
	);
};

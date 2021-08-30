import React, { useState, useEffect, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import "../../../styles/app.scss";
//Importamos la libreria axios previamente instalada
import axios from "axios";
//react-bootstrap
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Aqui colocar la URL de la API por favor
import { URL } from "../../config";

//Componente importado
import { Datos_contrato_component } from "../../component/Datos_contrato_component";

export const Datos_contrato = props => {
	const [contrato, setContrato] = useState(null);
	const { id } = useParams();
	const fetchContrato = useCallback(
		async () => {
			try {
				const { data } = await axios.get(`${URL}contrato/${id}`);
				// console.log("users", data.Lista_de_usuarios);
				setContrato(data);
			} catch (error) {
				console.error(error);
				alert("Error en la api: No se pudo recibir informacion del contrato");
			}
		},
		[setContrato]
	);

	useEffect(
		() => {
			// console.log("id", id);
			fetchContrato();
		},
		[fetchContrato]
	);
	return (
		<Container>
			{contrato ? (
				<>
					<Datos_contrato_component
						id={Number(id)}
						id_project={contrato.id_project}
						region={contrato.region}
						comuna={contrato.comuna}
						sector={contrato.sector}
						obra_descripcion={contrato.obra_descripcion}
						planta_matriz={contrato.planta_matriz}
						comentario={contrato.comentario}
						fecha_registro={contrato.fecha_registro}
						// ordenes=""
						//tecnicos={contrato.tecnicos}
					/>
					<Button className="my-3" variant="primary">
						<Link className="text-light" to={`../editar_contrato/${Number(id)}`}>
							Editar
						</Link>
					</Button>{" "}
				</>
			) : (
				<h2>Cargando...</h2>
			)}
		</Container>
	);
};

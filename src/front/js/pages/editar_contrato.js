import React, { useState, useCallback, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

//react-bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Componentes importados
import { CrearcontratoComponent } from "../component/crear_contrato_component";

//Aqui colocar la URL de la API por favor
const URL = "https://3001-aquamarine-junglefowl-vjqddwwz.ws-us15.gitpod.io/api/";

export const Editarcontrato = () => {
	const [contrato, setContrato] = useState(null);
	const { id } = useParams();

	const fetchContrato = useCallback(
		async () => {
			try {
				const { data } = await axios.get(`${URL}lista_contratos/${id}`);
				// console.log("user", data);
				setContrato(data);
			} catch (error) {
				console.error(error);
				alert("Error en la api: No pude traer los datos");
			}
		},
		[setContrato]
	);

	useEffect(
		() => {
			fetchContrato();
		},
		[fetchContrato]
	);

	return (
		<Container>
			{contrato ? (
				<Form>
					<CrearcontratoComponent
						id_project={contrato.id_project}
						region={contrato.region}
						comuna={contrato.comuna}
						sector={contrato.sector}
						obra_descripcion={contrato.obra_descripcion}
						planta_matriz={contrato.planta_matriz}
						comentario={contrato.comentario}
						fecha_registro={contrato.fecha_registro}
					/>
					<Container>
						<Form>
							<Button className="my-3" variant="primary">
								<Link className="text-light">Enviar</Link>
							</Button>{" "}
						</Form>
					</Container>
				</Form>
			) : (
				<h2>Cargando</h2>
			)}
		</Container>
	);
};

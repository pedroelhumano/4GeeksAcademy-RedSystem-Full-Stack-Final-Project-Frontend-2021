import React, { useState, useCallback, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

//react-bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Componentes importados
import { EditarcontratoComponent } from "../../component/editar_contrato_component";

//Aqui colocar la URL de la API por favor
import { URL } from "../../config";
import { Context } from "../../store/appContext";

export const Editarcontrato = () => {
	const [contrato, setContrato] = useState(null);
	const { id } = useParams();
	const { store, actions } = useContext(Context);
	const fetchContrato = useCallback(
		async () => {
			try {
				const { data } = await axios.get(`${URL}contrato/${id}`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				});
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
				<>
					<EditarcontratoComponent
						id={id}
						id_project={contrato.id_project}
						region={contrato.region}
						comuna={contrato.comuna}
						tecnicos={contrato.tecnicos}
						sector={contrato.sector}
						obra_descripcion={contrato.obra_descripcion}
						planta_matriz={contrato.planta_matriz}
						comentario={contrato.comentario}
						fecha_registro={contrato.fecha_registro}
					/>
				</>
			) : (
				<h2>Cargando</h2>
			)}
		</Container>
	);
};

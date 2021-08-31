import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../config";

//react-bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const CrearcontratoComponent = props => {
	//const { id } = useParams();
	const [datos, setDatos] = useState({
		//id_contrato: id,
		id_project: "",
		region: "",
		comuna: "",
		sector: "",
		plano: "",
		obra_descripcion: "",
		planta_matriz: "",
		comentario: "",
		fecha_registro: ""
		// status: "",
	});
	const handleInputChange = event => {
		//console.log(event.target.name);
		//console.log(event.target.value);
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		});
	};
	const enviarDatos = async event => {
		try {
			event.preventDefault();
			console.log("enviando datos...", datos);
			const res = await axios.post(`${URL}contrato`, datos);
			alert("Contrato creado exitosamente");
			console.log("res", res);
		} catch (error) {
			alert("Ocurrió un error al crear el contrato");
			console.error("error en contrato", error);
		}
	};
	useEffect(
		() => {
			setDatos({
				id_project: props.id_project,
				region: props.region,
				comuna: props.comuna,
				sector: props.sector,
				plano: props.plano,
				obra_descripcion: props.obra_descripcion,
				planta_matriz: props.planta_matriz,
				fecha_registro: props.fecha_registro,
				comentario: props.fecha_registro
			});
		},
		[setDatos]
	);
	return (
		<div>
			<h2>Crear contrato</h2>
			<Form onSubmit={enviarDatos}>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Nombre del proyecto</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control
							className="text-left"
							value={datos.id_project}
							type="text"
							name="id_project"
							placeholder="Empresa-123456789"
							onChange={handleInputChange}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Region</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control
							className="text-left"
							value={datos.region}
							name="region"
							type="text"
							onChange={handleInputChange}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Comuna</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control
							className="text-left"
							value={datos.comuna}
							name="comuna"
							type="text"
							onChange={handleInputChange}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Sector</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control
							className="text-left"
							value={datos.sector}
							type="text"
							name="sector"
							onChange={handleInputChange}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Obra</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control
							className="text-left"
							value={datos.obra_descripcion}
							type="text"
							name="obra_descripcion"
							onChange={handleInputChange}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Planta Matriz</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control
							className="text-left"
							value={datos.planta_matriz}
							name="planta_matriz"
							type="text"
							onChange={handleInputChange}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Comentario</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control
							as="textarea"
							name="comentario"
							value={datos.comentario}
							rows={3}
							onChange={handleInputChange}
						/>
					</Col>
				</Row>
				<Button className="my-3" variant="primary" type="submit">
					Crear
				</Button>{" "}
			</Form>
		</div>
	);
};
CrearcontratoComponent.propTypes = {
	//general
	id_project: PropTypes.string,
	comuna: PropTypes.string,
	region: PropTypes.string,
	sector: PropTypes.string,
	plano: PropTypes.string,
	obra_descripcion: PropTypes.string,
	planta_matriz: PropTypes.string,
	comentario: PropTypes.string,
	fecha_registro: PropTypes.string
};

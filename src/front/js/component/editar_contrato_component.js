import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { URL } from "../config";
import "../../styles/app.scss";

//react-bootstrap
import { Modal, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const EditarcontratoComponent = props => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//FIN MODAL
	const [datos, setDatos] = useState({
		id_project: "",
		comuna: "",
		region: "",
		sector: "",
		obra_descripcion: "",
		planta_matriz: "",
		comentario: "",
		tecnicos: "",
		fecha_registro: ""
	});
	const handleInputChange = event => {
		// console.log(event.target.name);
		// console.log(event.target.value);
		setDatos({
			...datos,
			[event.target.name]: event.target.value
		});
	};
	const enviarDatos = async event => {
		try {
			event.preventDefault();
			console.log("enviando datos...", datos);
			const res = await axios.put(`${URL}contrato/${props.id}`, datos, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			});
			//alert("Contrato actualizado exitosamente");
			console.log("res", res);
		} catch (error) {
			alert("Ocurrió un error al actualizar el contrato");
			console.error("error al actualizar contrato", error);
		}
	};
	useEffect(
		() => {
			setDatos({
				id_project: props.id_project,
				comuna: props.comuna,
				region: props.region,
				sector: props.sector,
				obra_descripcion: props.obra_descripcion,
				planta_matriz: props.planta_matriz,
				tecnicos: props.tecnicos,
				comentario: props.comentario,
				fecha_registro: props.fecha_registro
			});
		},
		[setDatos]
	);
	return (
		<div className="ml-5 border p-2">
			<h2>Contrato</h2>
			<Form onSubmit={enviarDatos}>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Nombre del proyecto</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control
							className="text-left"
							type="text"
							placeholder="Empresa-123456789"
							value={datos.id_project}
							onChange={handleInputChange}
							name="id_project"
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
							type="text"
							value={datos.region}
							onChange={handleInputChange}
							name="region"
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
							type="text"
							value={datos.comuna}
							onChange={handleInputChange}
							name="comuna"
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
							type="text"
							value={datos.sector}
							onChange={handleInputChange}
							name="sector"
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
							type="text"
							value={datos.obra_descripcion}
							onChange={handleInputChange}
							name="obra_descripcion"
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
							type="text"
							value={datos.planta_matriz}
							onChange={handleInputChange}
							name="planta_matriz"
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Tecnicos</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control
							className="text-left"
							type="text"
							value={datos.tecnicos}
							onChange={handleInputChange}
							name="tecnicos"
						/>
					</Col>
				</Row>
				{/* <Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Plano</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Group controlId="formFile">
							<Form.Control type="file" />
						</Form.Group>
					</Col>
				</Row> */}
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Comentario</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control
							as="textarea"
							rows={3}
							value={datos.comentario}
							onChange={handleInputChange}
							name="comentario"
						/>
					</Col>
				</Row>
				{/* <Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Fecha registro</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control
							className="text-left"
							type="text"
							value={props.fecha_registro}
							name="fecha_registro"
						/>
					</Col>
				</Row> */}
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Status</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						{/* <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
							<option value="Pendiente">Pendiente</option>
							<option value="Iniciado">Iniciado</option>
							<option value="Finalizado">Finalizado</option>
							<option value="Cancelado">Cancelado</option>
						</Form.Select> */}

						<select
							id="status"
							name="status"
							form="statusform"
							onChange={handleInputChange}
							value={datos.status}>
							<option value="">Seleccionar</option>
							<option value="Pendiente">Pendiente</option>
							<option value="Iniciado">Iniciado</option>
							<option value="Finalizado">Finalizado</option>
							<option value="Cancelado">Cancelado</option>
						</select>
					</Col>
				</Row>
				{/* <Button className="my-2" variant="primary" type="submit">
					Enviar
				</Button>{" "} */}
				<Button className="my-3" variant="primary" onClick={handleShow} type="submit">
					Enviar
				</Button>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton />
					<Modal.Body>Contrato actualizado exitosamente</Modal.Body>
					<Modal.Footer>
						<Button variant="success" onClick={handleClose}>
							OK
						</Button>
					</Modal.Footer>
				</Modal>
			</Form>
		</div>
	);
};
EditarcontratoComponent.propTypes = {
	//general
	id: PropTypes.string,
	id_project: PropTypes.string,
	comuna: PropTypes.string,
	region: PropTypes.string,
	sector: PropTypes.string,
	obra_descripcion: PropTypes.string,
	planta_matriz: PropTypes.string,
	comentario: PropTypes.string,
	status: PropTypes.string,
	tecnicos: PropTypes.string,
	fecha_registro: PropTypes.string
};

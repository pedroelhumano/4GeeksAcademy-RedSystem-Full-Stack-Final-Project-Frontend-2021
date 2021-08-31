import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
import { URL } from "../config";
//react-bootstrap
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

//react-bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Crear_orden_basecontrato = props => {
	//MODAL
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//FIN MODAL
	const { id } = useParams();
	const [datos, setDatos] = useState({
		id_contrato: id,
		id_nombre: "",
		direccion: "",
		tipo: "",
		descripcion: ""
		// status: "",
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
			const res = await axios.post(`${URL}order`, datos, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
			});
			//alert("Orden creada exitosamente");
			console.log("res", res);
		} catch (error) {
			alert("Ocurrió un error al crear la orden de trabajo");
			console.error("error en la orden", error);
		}
	};
	useEffect(
		() => {
			setDatos({
				id_contrato: props.id,
				tipo: props.tipo,
				direccion: props.direccion,
				descripcion: props.descripcion,
				status: props.status,
				id_nombre: props.id_nombre
			});
		},
		[setDatos]
	);
	return (
		<>
			<h2>Orden Trabajo</h2>
			<Form onSubmit={enviarDatos}>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>ID</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control
							className="text-left"
							type="text"
							placeholder="MUFA-01"
							value={datos.id_nombre}
							name="id_nombre"
							onChange={handleInputChange}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Direccion</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control
							className="text-left"
							type="text"
							value={datos.direccion}
							name="direccion"
							onChange={handleInputChange}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Tipo</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control
							className="text-left"
							type="text"
							value={datos.tipo}
							name="tipo"
							onChange={handleInputChange}
						/>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Descripcion</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control
							as="textarea"
							rows={3}
							value={datos.descripcion}
							name="descripcion"
							onChange={handleInputChange}
						/>
					</Col>
				</Row>
				{props.status && (
					<Row>
						<Col lg={2} md={1} sm={2}>
							<Form.Label>Status</Form.Label>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control
								className="text-left"
								type="text"
								value={datos.status}
								name="status"
								onChange={handleInputChange}
							/>
						</Col>
					</Row>
				)}
				<Button className="my-3" variant="primary" onClick={handleShow} type="submit">
					Crear
				</Button>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton />
					<Modal.Body>Orden creada exitosamente</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleClose}>
							OK
						</Button>
					</Modal.Footer>
				</Modal>
				{/* <Button className="my-3" variant="primary" type="submit">
					Enviar
				</Button>{" "} */}
			</Form>
		</>
	);
};
Crear_orden_basecontrato.propTypes = {
	//de las ordenes
	id: PropTypes.string,
	// id_contrato: PropTypes.string,
	id_nombre: PropTypes.string,
	tipo: PropTypes.string,
	direccion: PropTypes.string,
	descripcion: PropTypes.string,
	status: PropTypes.string
};

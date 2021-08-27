import React from "react";
import PropTypes from "prop-types";

//react-bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Crearordeninv = props => {
	return (
		<>
			<h2>Crear una orden de trabajo</h2>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>ID</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control
						className="text-left"
						type="text"
						placeholder="MUFA-01"
						defaultValue={props.id_nombre}
					/>
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Direccion</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control className="text-left" type="text" defaultValue={props.direccion} />
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Tipo</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control className="text-left" type="text" defaultValue={props.tipo} />
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Descripcion</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control as="textarea" rows={3} defaultValue={props.descripcion} />
				</Col>
			</Row>
			{props.status && (
				<Row>
					<Col lg={2} md={1} sm={2}>
						<Form.Label>Status</Form.Label>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<Form.Control className="text-left" type="text" defaultValue={props.status} />
					</Col>
				</Row>
			)}
		</>
	);
};
Crearordeninv.propTypes = {
	//de las ordenes
	id_nombre: PropTypes.string,
	tipo: PropTypes.string,
	direccion: PropTypes.string,
	descripcion: PropTypes.string,
	status: PropTypes.string
};

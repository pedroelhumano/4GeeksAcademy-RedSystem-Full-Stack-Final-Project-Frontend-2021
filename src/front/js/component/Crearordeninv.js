import React from "react";
import { Link, useParams } from "react-router-dom";

//react-bootstrap
import { Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Crearordeninv = () => {
	return (
		<>
			<h2>Crear una orden de trabajo</h2>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>ID</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control className="text-left" type="text" placeholder="MUFA-01" />
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Region</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control className="text-left" type="text" />
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Comuna</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control className="text-left" type="text" />
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Sector</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control className="text-left" type="text" />
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Direccion</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control className="text-left" type="text" />
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Obra</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control className="text-left" type="text" />
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Planta Matriz</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control className="text-left" type="text" />
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Planta Matriz</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control className="text-left" type="text" />
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Comentario</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control as="textarea" rows={3} />
				</Col>
			</Row>
		</>
	);
};

import React from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";

//react-bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const CrearcontratoComponent = props => {
	return (
		<div>
			<h2>Crear contrato</h2>

			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Nombre del proyecto</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control
						className="text-left"
						defaultValue={props.id_project}
						type="text"
						placeholder="Empresa-123456789"
					/>
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Region</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control className="text-left" defaultValue={props.region} type="text" />
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Comuna</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control className="text-left" defaultValue={props.comuna} type="text" />
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Sector</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control className="text-left" defaultValue={props.sector} type="text" />
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Obra</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control className="text-left" defaultValue={props.obra_descripcion} type="text" />
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Planta Matriz</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control className="text-left" defaultValue={props.planta_matriz} type="text" />
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Plano</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Group controlId="formFile">
						<Form.Control type="file" />
					</Form.Group>
				</Col>
			</Row>
			<Row>
				<Col lg={2} md={1} sm={2}>
					<Form.Label>Comentario</Form.Label>
				</Col>
				<Col lg={10} md={11} sm={10}>
					<Form.Control as="textarea" defaultValue={props.comentario} rows={3} />
				</Col>
			</Row>
		</div>
	);
};
CrearcontratoComponent.propTypes = {
	//general
	id_project: PropTypes.string,
	comuna: PropTypes.string,
	region: PropTypes.string,
	sector: PropTypes.string,
	obra_descripcion: PropTypes.string,
	planta_matriz: PropTypes.string,
	comentario: PropTypes.string,
	fecha_registro: PropTypes.string
};

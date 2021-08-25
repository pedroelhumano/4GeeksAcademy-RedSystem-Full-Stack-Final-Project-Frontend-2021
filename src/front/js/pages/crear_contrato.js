import React from "react";
import { Link, useParams } from "react-router-dom";

//Componentes importados
import { Crearordeninv } from "../component/Crearordeninv.js";

//react-bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Crearcontrato = () => {
	return (
		<Container className="mb-3">
			<div className="border">
				<Form className="ml-5">
					<h2>Crear contrato</h2>
					<Row>
						<Col lg={2} md={1} sm={2}>
							<Form.Label>Nombre del proyecto</Form.Label>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control className="text-left" type="text" placeholder="Empresa-123456789" />
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
							<Form.Label>Calle</Form.Label>
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
							<Form.Label>Planta Matriz</Form.Label>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control className="text-left" type="text" />
						</Col>
					</Row>
					<Row>
						<Col lg={2} md={1} sm={2}>
							<Form.Label>CTO</Form.Label>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control className="text-left" type="text" />
						</Col>
					</Row>
					<Row>
						<Col lg={2} md={1} sm={2}>
							<Form.Label>NAP</Form.Label>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control className="text-left" type="text" />
						</Col>
					</Row>
					<Row>
						<Col lg={2} md={1} sm={2}>
							<Form.Label>MUFA</Form.Label>
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
					<Crearordeninv />
					<Button className="my-3" variant="primary">
						Crear
					</Button>{" "}
				</Form>
			</div>
		</Container>
	);
};

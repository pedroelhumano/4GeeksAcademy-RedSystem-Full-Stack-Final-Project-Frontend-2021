import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/app.scss";
//Componentes importados
import { Container, Row, Col, Card, Button, CardGroup, Image, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Formulariocontacto = props => {
	return (
		<div>
			<Container className="mt-4">
				<Form>
					<h1>Formulario de Contacto</h1>
					<Form.Label className="mt-4">Nombre Completo</Form.Label>
					<Form.Control placeholder="Nombre y Apellido" />
					<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
						<Form.Label className="mt-4">Email</Form.Label>
						<Form.Control type="email" placeholder="name@example.com" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
						<Form.Label className="mt-4">Comentarios</Form.Label>
						<Form.Control as="textarea" rows={3} />
					</Form.Group>
				</Form>
			</Container>
			<Row className="justify-content-md-center pb-3">
				<Button variant="success" href="#">
					Enviar
				</Button>
			</Row>
		</div>
	);
};

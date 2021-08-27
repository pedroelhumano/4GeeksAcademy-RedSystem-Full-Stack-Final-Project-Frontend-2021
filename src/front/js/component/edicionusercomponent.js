import React from "react";
import PropTypes from "prop-types";
import "../../styles/app.scss";

//react-bootstrap
import { Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const EditaruserCompont = props => {
	return (
		<Container className="mb-3">
			<div className="border pl-3">
				<Form className="ml-5">
					<h2>Usuario</h2>
					<Row>
						<Col lg={2} md={1} sm={2}>
							<div>Perfil:</div>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control className="text-left" type="text" placeholder={props.perfil} />
						</Col>
					</Row>
					<Row>
						<Col lg={2} md={1} sm={2}>
							<div>Nombre:</div>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control
								className="text-left"
								type="text"
								placeholder={props.nombre + " " + props.apellido}
							/>
						</Col>
					</Row>
					<Row>
						<Col lg={2} md={1} sm={2}>
							<div>RUT:</div>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control className="text-left" type="text" placeholder={props.rut} />
						</Col>
					</Row>
					<Row>
						<Col lg={2} md={1} sm={2}>
							<div>Email:</div>
						</Col>

						<Col lg={10} md={11} sm={10}>
							<Form.Control className="text-left" type="text" placeholder={props.email} />
						</Col>
					</Row>
					<Row>
						<Col lg={2} md={1} sm={2}>
							<div>Password:</div>
						</Col>

						<Col lg={10} md={11} sm={10}>
							<Form.Control className="text-left" type="password" placeholder="Password" />
						</Col>
					</Row>

					<Row>
						<Col lg={2} md={1} sm={2}>
							<div>Contact:</div>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control className="text-left" type="text" placeholder={props.contact} />
						</Col>
					</Row>
					<Row>
						<Col lg={2} md={1} sm={2}>
							<div>Fecha de nacimiento:</div>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control className="text-left" type="text" placeholder={props.fechanacimiento} />
						</Col>
					</Row>
					<Row>
						<Col lg={2} md={1} sm={2}>
							<div>Fecha de registro:</div>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control className="text-left" type="text" placeholder={props.fecharegistro} />
						</Col>
					</Row>
				</Form>
			</div>
		</Container>
	);
};
//Protypes declarado fuera de la funcion export
EditaruserCompont.propTypes = {
	//general
	perfil: PropTypes.string,
	nombre: PropTypes.string,
	apellido: PropTypes.string,
	rut: PropTypes.string,
	email: PropTypes.string,
	contact: PropTypes.string,
	fechanacimiento: PropTypes.string,
	fecharegistro: PropTypes.string
};

import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/app.scss";

//react-bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Usuario = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<Container className="mb-3">
			<div className="border pl-3">
				<h2>Usuario</h2>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<div>Perfil:</div>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<div>{props.perfil}</div>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<div>Nombre:</div>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<div>
							{props.nombre} {props.apellido}
						</div>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<div>RUT:</div>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<div>{props.rut}</div>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<div>Email:</div>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<div>{props.email}</div>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<div>Contact:</div>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<div>{props.contact}</div>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<div>Fecha de nacimiento:</div>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<div>{props.fechanacimiento}</div>
					</Col>
				</Row>
				<Row>
					<Col lg={2} md={1} sm={2}>
						<div>Fecha de registro:</div>
					</Col>
					<Col lg={10} md={11} sm={10}>
						<div>{props.fecharegistro}</div>
					</Col>
				</Row>
			</div>
			<Button className="my-3" variant="primary">
				<Link className="text-light" to="/editar_user">
					Editar
				</Link>
			</Button>{" "}
		</Container>
	);
};
//Protypes declarado fuera de la funcion export
Usuario.propTypes = {
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

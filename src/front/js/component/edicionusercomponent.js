import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { URL } from "../config";
import "../../styles/app.scss";

//react-bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const EditaruserCompont = props => {
	const [datos, setDatos] = useState({
		perfil: "",
		name: "",
		lastname: "",
		rut: "",
		email: "",
		password: "",
		contact: "",
		//fecha_nacimiento: "",
		fecharegistro: ""
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
			const res = await axios.put(`${URL}user/${props.id}`, datos);
			alert("Usuario actualizado exitosamente");
			console.log("res", res);
		} catch (error) {
			alert("Ocurrió un error al actualizar usuario");
			console.error("error al actualizar usuario", error);
		}
	};

	useEffect(
		() => {
			setDatos({
				perfil: props.perfil,
				name: props.nombre,
				lastname: props.apellido,
				rut: props.rut,
				email: props.email,
				contact: props.contact,
				//fecha_nacimiento: props.fechanacimiento,
				fecharegistro: props.fecharegistro
			});
		},
		[setDatos]
	);

	return (
		<Container className="mb-3">
			<div className="border pl-3">
				<Form className="ml-5" onSubmit={enviarDatos}>
					<h2>Usuario</h2>
					<Row>
						<Col lg={2} md={1} sm={2}>
							<div>Perfil:</div>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control
								className="text-left"
								type="text"
								value={datos.perfil}
								onChange={handleInputChange}
								name="perfil"
							/>
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
								value={datos.name}
								onChange={handleInputChange}
								name="name"
							/>
						</Col>
					</Row>
					<Row>
						<Col lg={2} md={1} sm={2}>
							<div>Apellido:</div>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control
								className="text-left"
								type="text"
								value={datos.lastname}
								onChange={handleInputChange}
								name="lastname"
							/>
						</Col>
					</Row>
					<Row>
						<Col lg={2} md={1} sm={2}>
							<div>RUT:</div>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control
								className="text-left"
								type="text"
								value={datos.rut}
								onChange={handleInputChange}
								name="rut"
							/>
						</Col>
					</Row>
					<Row>
						<Col lg={2} md={1} sm={2}>
							<div>Email:</div>
						</Col>

						<Col lg={10} md={11} sm={10}>
							<Form.Control
								className="text-left"
								type="text"
								value={datos.email}
								onChange={handleInputChange}
								name="email"
							/>
						</Col>
					</Row>
					{/* <Row>
						<Col lg={2} md={1} sm={2}>
							<div>Password:</div>
						</Col>

						<Col lg={10} md={11} sm={10}>
							<Form.Control
								className="text-left"
								type="password"
								name="password"
								onChange={handleInputChange}
							/>
						</Col>
					</Row> */}
					<Row>
						<Col lg={2} md={1} sm={2}>
							<div>Contact:</div>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control
								className="text-left"
								type="text"
								value={datos.contact}
								onChange={handleInputChange}
								name="contact"
							/>
						</Col>
					</Row>
					{/* <Row>
						<Col lg={2} md={1} sm={2}>
							<div>Fecha de nacimiento:</div>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control
								className="text-left"
								type="text"
								value={datos.fecha_nacimiento}
								onChange={handleInputChange}
								name="fecha_nacimiento"
							/>
						</Col>
					</Row> */}
					{/* <Row>
						<Col lg={2} md={1} sm={2}>
							<div>Fecha de registro:</div>
						</Col>
						<Col lg={10} md={11} sm={10}>
							<Form.Control
								className="text-left"
								type="text"
								value={datos.fecharegistro}
								onChange={handleInputChange}
								name="fecharegistro"
							/>
						</Col>
					</Row> */}
					<Button className="my-3" variant="primary" type="submit">
						Enviar
					</Button>{" "}
				</Form>
			</div>
		</Container>
	);
};
//Protypes declarado fuera de la funcion export
EditaruserCompont.propTypes = {
	//general
	id: PropTypes.string,
	perfil: PropTypes.string,
	nombre: PropTypes.string,
	apellido: PropTypes.string,
	rut: PropTypes.string,
	email: PropTypes.string,
	contact: PropTypes.string,
	fechanacimiento: PropTypes.string,
	fecharegistro: PropTypes.string
};

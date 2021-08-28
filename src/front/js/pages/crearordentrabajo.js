import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/app.scss";

//Componentes importados
import { Crearordeninv } from "../component/Crearordeninv.js";

//react-bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Crearordentrabajo = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<Container className="mb-3">
			<div className="border">
				<Form className="ml-5">
					<Crearordeninv />
					<Button className="my-3" variant="primary">
						Editar
					</Button>{" "}
				</Form>
			</div>
		</Container>
	);
};

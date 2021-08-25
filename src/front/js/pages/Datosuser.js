import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/app.scss";

//Componentes importados
import { Usuario } from "../component/usuario.js";

//react-bootstrap
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Datosuser = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<Usuario
			perfil="Administrador"
			nombre="Pedro"
			apellido="Yanez"
			rut="12345678-9"
			email="pedro_y91@outlook.com"
			contact="91234567"
			fechanacimiento="23-02-1991"
			fecharegistro="23-08-2021"
		/>
	);
};

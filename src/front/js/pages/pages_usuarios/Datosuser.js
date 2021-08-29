import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import "../../../styles/app.scss";
//Importamos la libreria axios
import axios from "axios";
//Componentes importados
import { Usuario } from "../../component/usuario.js";
//Aqui colocar la URL de la API por favor
import { URL } from "../../config";

//react-bootstrap
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Datosuser = () => {
	const [user, setUser] = useState(null);
	const { id } = useParams();

	/**
	 * Función para traernos la información del usuario mediante axios
	 * Después de obtenerlo lo guardamos con la función setUser
	 * que nos brinda useState
	 */

	const fetchUser = useCallback(
		async () => {
			try {
				const { data } = await axios.get(`${URL}user/${id}`);
				setUser(data);
				// console.log("user", data);
			} catch (error) {
				console.error(error);
				alert("Error en la api: No se pudo recibir la lista de usuarios");
			}
		},
		[setUser]
	);

	useEffect(
		() => {
			// console.log("id", id);
			fetchUser();
		},
		[fetchUser]
	);

	return (
		<Container className="border pl-3">
			{user ? (
				<>
					<Usuario
						id={Number(id)}
						perfil={user.perfil}
						nombre={user.name}
						apellido={user.lastname}
						rut={user.rut}
						email={user.email}
						contact={user.contact}
						fechanacimiento={user.fecha_nacimiento}
						fecharegistro={user.fecha_registro}
					/>
					<Button className="my-3" variant="primary">
						<Link className="text-light" to={`../editar_user/${Number(id)}`}>
							Editar
						</Link>
					</Button>{" "}
				</>
			) : (
				<h2>Cargando...</h2>
			)}
		</Container>
	);
};

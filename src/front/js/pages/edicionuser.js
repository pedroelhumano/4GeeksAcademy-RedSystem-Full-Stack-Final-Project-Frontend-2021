import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import "../../styles/app.scss";
//Importamos axios
import axios from "axios";

//Aqui colocar la URL de la API por favor
const URL = "https://3001-aquamarine-junglefowl-vjqddwwz.ws-us15.gitpod.io/api/";

//Componentes importados
import { EditaruserCompont } from "../component/edicionusercomponent.js";

//react-bootstrap
import { Container, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Editaruser = props => {
	const [user, setUser] = useState(null);
	const { id } = useParams();

	const fetchUser = useCallback(
		async () => {
			try {
				const { data } = await axios.get(`${URL}lista_users/${id}`);
				// console.log("user", data);
				setUser(data);
			} catch (error) {
				console.error(error);
				alert("Error en la api: No pude traer los datos");
			}
		},
		[setUser]
	);

	useEffect(
		() => {
			fetchUser();
		},
		[fetchUser]
	);

	return (
		<>
			{user ? (
				<>
					<EditaruserCompont
						perfil={user.perfil}
						nombre={user.name}
						apellido={user.lastname}
						rut={user.rut}
						email={user.email}
						contact={user.contact}
						fechanacimiento={user.fecha_nacimiento}
						fecharegistro={user.fecha_registro}
					/>
					<Container>
						<Form>
							<Button className="my-3" variant="primary">
								<Link className="text-light">Enviar</Link>
							</Button>{" "}
						</Form>
					</Container>
				</>
			) : (
				<h2>Cargando</h2>
			)}
		</>
	);
};

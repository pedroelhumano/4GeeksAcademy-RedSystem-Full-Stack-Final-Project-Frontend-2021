import React, { useState, useEffect, useCallback } from "react";
import "../../styles/app.scss";
//Componentes importados
import { Listastotal } from "../component/listastotal.js";
//react-bootstrap
//import { Button } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

//Aqui colocar la URL de la API por favor
const URL = "https://3001-pink-louse-3qaycfja.ws-us15.gitpod.io/api/";

export const Listausuarios = props => {
	//Generamos primero el uso de useState
	const [users, setUsers] = useState([]);

	/**
	 * La funcion a cotinuacion nos trae la lista de usuarios y despues de
	 * obtenerlo lo guardamos con la funcion que nos brinda el
	 * useState previamente declarado
	 */
	const fetchUsers = useCallback(
		async () => {
			try {
				const { data } = await axios.get(`${URL}lista_users`);
				// console.log("users", data.Lista_de_usuarios);
				setUsers(data.Lista_de_usuarios);
			} catch (error) {
				console.error(error);
				alert("Error en la api: No se pudo recibir la lista de usuarios");
			}
		},
		[setUsers]
	);

	useEffect(
		() => {
			fetchUsers();
		},
		[fetchUsers]
	);

	return (
		<div className="container">
			<ul className="list-group container-fluid mb-3">
				{users.length > 0 ? (
					users.map(user => (
						<Listastotal
							id_nombre="Pedro Yanez"
							perfil="Admin"
							url_info="configuracion"
							textbutton2="Editar"
							url_orden="editar_user"
							key={user.id} //llave necesaria para que no se tumbe react
						/>
					))
				) : (
					<h2>Cargando...</h2>
				)}
			</ul>
		</div>
	);
};

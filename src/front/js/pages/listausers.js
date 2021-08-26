import React, { useState, useEffect, useCallback } from "react";
import "../../styles/app.scss";
//Componentes importados
import { Listastotal } from "../component/listastotal.js";
//react-bootstrap
//import { Button } from "react-bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";

//Importamos la libreria axios previamente instalada
import axios from "axios";

//Aqui colocar la URL de la API por favor
const URL = "https://3001-aquamarine-junglefowl-vjqddwwz.ws-us15.gitpod.io/api/";

export const Listausuarios = () => {
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
							id_nombre={`${user.name} ${user.lastname}`}
							perfil={user.perfil}
							url_info={`configuracion/${user.id}`}
							textbutton2="Editar"
							url_orden={`editar_user/${user.id}`}
							key={user.id} //llave necesaria para que no se tumbe react y poder iterar
						/>
					))
				) : (
					<h2>Cargando...</h2>
				)}
			</ul>
		</div>
	);
};

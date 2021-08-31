import React, { useState, useEffect, useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import "../../../styles/app.scss";
//Componentes importados
import { Listastotal } from "../../component/listastotal.js";
//react-bootstrap
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Importamos la libreria axios previamente instalada
import axios from "axios";
import { URL } from "../../config";
import { Context } from "../../store/appContext";

export const Contratos = props => {
	//Generamos primero el uso de useState
	const [contratos, setContratos] = useState([]);
	const { store, actions } = useContext(Context);

	//AXIOS
	const fetchContratos = useCallback(
		async () => {
			try {
				const { data } = await axios.get(`${URL}contratos`, {
					headers: {
						Authorization: `Bearer ${localStorage.getItem("token")}`
					}
				});
				// console.log("users", data.Lista_de_usuarios);
				setContratos(data.Lista_de_contratos);
			} catch (error) {
				console.error(error);
				alert("Error en la api: No se pudo recibir la lista de contratos");
			}
		},
		[setContratos]
	);

	useEffect(
		() => {
			fetchContratos();
		},
		[fetchContratos]
	);

	const verificarcolor = elestado => {
		let color = "";
		if (elestado == "Cancelado") {
			color = "bg-danger";
			return color;
		} else if (elestado == "Pendiente") {
			color = "bg-warning";
			return color;
		} else if (elestado == "Iniciado") {
			color = "bg-success";
			return color;
		} else if (elestado == "Finalizado") {
			color = "bg-info";
			return color;
		} else {
			color = "bg-warning";
			return color;
		}
	};

	return (
		<div className="container">
			<h2>Contratos</h2>
			<ul className="list-group container-fluid mb-3">
				{contratos.length > 0 ? (
					contratos.map(contrato => (
						//  let color = "";
						//  if (contrato.status == "Cancelado") {
						//  	color = "bg-danger";
						// }
						<Listastotal
							//status={color}
							// status={"bg-danger"}
							status={verificarcolor(contrato.status)}
							id_nombre={contrato.id_project}
							url_info={`datos_contrato/${contrato.id}`}
							textbutton2="Ordenes de trabajo"
							url_orden={`ordenes/${contrato.id}`}
							key={contrato.id}
						/>
					))
				) : (
					<h2>Cargando...</h2>
				)}
			</ul>

			<div className="row justify-content-md-center">
				<div className="col-md-auto ">
					<Button variant="primary">
						<Link className="text-light" to="/crear_contrato">
							Crear contrato
						</Link>
					</Button>{" "}
				</div>
			</div>
		</div>
	);
};

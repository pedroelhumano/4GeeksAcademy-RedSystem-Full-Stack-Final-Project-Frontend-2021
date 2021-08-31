import React from "react";
import PropTypes from "prop-types";
import "../../styles/app.scss";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { URL } from "../config";

export const Datos_orden_component = props => {
	const eliminar = async event => {
		try {
			event.preventDefault();
			console.log("eliminando...");
			const res = await axios.delete(`${URL}order/${props.id}`);
			// const res = await axios.del(`${URL}order/${props.id}`, datos);
			alert("Orden de trabajo eliminada");
			console.log("res", res);
		} catch (error) {
			alert("Ocurrió un error al eliminar la orden de trabajo");
			console.error("error en la orden", error);
		}
	};
	return (
		<div className="container">
			<div className="row">
				<table className="table table-bordered ">
					<tbody>
						<tr>
							<th scope="row">ID:</th>
							<td>{props.id_nombre}</td>
						</tr>
						<tr>
							<td>Tipo de trabajo</td>
							<td>{props.tipo}</td>
						</tr>
						<tr>
							<td>Status</td>
							<td>{props.status}</td>
						</tr>
						<tr>
							<td>Dirección</td>
							<td>{props.direccion}</td>
						</tr>
						{/* <tr>
							<td>GEO</td>
							<td>
								<button type="button" className="btn btn-secondary col-md-4 col-lg-3 m-1">
									Enviar Geo
								</button>
								<button type="button" className="btn btn-secondary col-md-4 col-lg-3 m-1">
									Ver Geo
								</button>
							</td>
						</tr> */}
						{/* <tr>
							<td>Fotografias</td>
							<td>
								<button type="button" className="btn btn-secondary col-md-4 col-lg-3 m-1">
									Cargar Fotografias
								</button>
								<button type="button" className="btn btn-secondary col-md-4 col-lg-3 m-1">
									Ver Fotografias
								</button>
							</td>
						</tr> */}
						{/* <tr>
							<td>Plano</td>
							<td>
								<button type="button" className="btn btn-secondary col-md-4 col-lg-3">
									Descargar
								</button>
							</td>
						</tr> */}
						<tr>
							<td>Tecnicos</td>
							<td>{props.tecnicos_asignados}</td>
						</tr>
						<tr>
							<td>Descripcion</td>
							<td>{props.descripcion}</td>
						</tr>
					</tbody>
				</table>
				<Button className="my-2 bg-danger" variant="primary" onClick={eliminar}>
					Eliminar
				</Button>{" "}
			</div>
		</div>
	);
};
Datos_orden_component.propTypes = {
	//de las ordenes
	id: PropTypes.string,
	id_nombre: PropTypes.string,
	tipo: PropTypes.string,
	descripcion: PropTypes.string,
	status: PropTypes.string,
	tecnicos_asignados: PropTypes.string,
	direccion: PropTypes.string
};

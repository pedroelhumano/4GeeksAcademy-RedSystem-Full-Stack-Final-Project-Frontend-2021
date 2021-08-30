import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/app.scss";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { URL } from "../config";

export const Datos_contrato_component = props => {
	const eliminar = async event => {
		try {
			event.preventDefault();
			console.log("eliminando...");
			const res = await axios.delete(`${URL}contrato/${props.id}`);
			// const res = await axios.del(`${URL}order/${props.id}`, datos);
			alert("Contrato eliminado");
			console.log("res", res);
		} catch (error) {
			alert("Ocurrió un error al eliminar el contrato");
			console.error("error en la contrato", error);
		}
	};

	return (
		<div className="container">
			<div className="row">
				<table className="table table-bordered ">
					<tbody>
						<tr>
							<th scope="row">ID PROJECT:</th>
							<td>{props.id_project}</td>
						</tr>
						<tr>
							<td>Región</td>
							<td>{props.region}</td>
						</tr>
						<tr>
							<td>Comuna</td>
							<td>{props.comuna}</td>
						</tr>
						<tr>
							<td>Sector</td>
							<td>{props.sector}</td>
						</tr>
						<tr>
							<td>Obras</td>
							<td>{props.obra_descripcion}</td>
						</tr>
						<tr>
							<td>Planta Matriz</td>
							<td>{props.planta_matriz}</td>
						</tr>
						<tr>
							<td>GEO</td>
							<td>
								<button type="button" className="btn btn-secondary col-md-4 col-lg-2">
									Ir
								</button>
							</td>
						</tr>
						<tr>
							<td>Plano</td>
							<td>
								<button type="button" className="btn btn-secondary col-md-4 col-lg-2">
									Descargar
								</button>
							</td>
						</tr>
						<tr>
							<td>Ver fotografias</td>
							<td>
								<Link to="ver_fotos_orden">
									<button type="button" className="btn btn-secondary">
										Acceder
									</button>
								</Link>
							</td>
						</tr>
						<tr>
							<td>Fecha creacion</td>
							<td>{props.fecha_registro}</td>
						</tr>
						<tr>
							<td>Tecnicos asignados</td>
							<td>{props.tecnicos}</td>
						</tr>
						<tr>
							<td>Comentarios</td>
							<td>{props.comentario}</td>
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
Datos_contrato_component.propTypes = {
	//general
	id: PropTypes.string,
	id_project: PropTypes.string,
	region: PropTypes.string,
	comuna: PropTypes.string,
	sector: PropTypes.string,
	obra_descripcion: PropTypes.string,
	planta_matriz: PropTypes.string,
	tecnicos: PropTypes.string,
	comentario: PropTypes.string,
	fecha_registro: PropTypes.string,
	ordenes: PropTypes.string
};

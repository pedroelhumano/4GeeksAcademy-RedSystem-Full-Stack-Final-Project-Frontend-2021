import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../../styles/app.scss";

export const Datos_contrato_component = props => {
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
							<th scope="row">Trabajos</th>
							<td>
								<Link to="ordenes">
									<button type="button" className="btn btn-secondary">
										Acceder
									</button>
								</Link>
							</td>
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
			</div>
		</div>
	);
};
Datos_contrato_component.propTypes = {
	//general
	id_project: PropTypes.string,
	region: PropTypes.string,
	comuna: PropTypes.string,
	sector: PropTypes.string,
	obra_descripcion: PropTypes.string,
	planta_matriz: PropTypes.string,
	tecnicos: PropTypes.string,
	comentario: PropTypes.string,
	fecha_registro: PropTypes.string
};

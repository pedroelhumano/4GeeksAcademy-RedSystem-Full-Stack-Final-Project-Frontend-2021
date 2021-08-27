import React from "react";
import PropTypes from "prop-types";
import "../../styles/app.scss";

export const Datos_orden_component = props => {
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
							<td>Estado</td>
							<td>{props.status}</td>
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
							<td>Dirección</td>
							<td>{props.direccion}</td>
						</tr>
						<tr>
							<td>GEO</td>
							<td>
								<button type="button" className="btn btn-secondary col-md-4 col-lg-3 m-1">
									Enviar Geo
								</button>
								<button type="button" className="btn btn-secondary col-md-4 col-lg-3 m-1">
									Ver Geo
								</button>
							</td>
						</tr>
						<tr>
							<td>Fotografias</td>
							<td>
								<button type="button" className="btn btn-secondary col-md-4 col-lg-3 m-1">
									Cargar Fotografias
								</button>
								<button type="button" className="btn btn-secondary col-md-4 col-lg-3 m-1">
									Ver Fotografias
								</button>
							</td>
						</tr>
						<tr>
							<td>Plano</td>
							<td>
								<button type="button" className="btn btn-secondary col-md-4 col-lg-3">
									Descargar
								</button>
							</td>
						</tr>
						<tr>
							<td>Tecnico</td>
							<td>{props.tecnicos_asignados}</td>
						</tr>
						<tr>
							<td>Descripcion</td>
							<td>{props.descripcion}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};
Datos_orden_component.propTypes = {
	//de las ordenes
	id_nombre: PropTypes.string,
	tipo: PropTypes.string,
	descripcion: PropTypes.string,
	status: PropTypes.string,
	tecnicos_asignados: PropTypes.string,
	direccion: PropTypes.string,
	//del contrato
	region: PropTypes.string,
	comuna: PropTypes.string,
	sector: PropTypes.string
};

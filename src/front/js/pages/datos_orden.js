import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/app.scss";

export const Datos_orden = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
			<div className="row">
				<table className="table table-bordered ">
					<tbody>
						<tr>
							<th scope="row">ID:</th>
							<td>MFF-01</td>
						</tr>
						<tr>
							<td>Región</td>
							<td>Metropolitana</td>
						</tr>
						<tr>
							<td>Comuna</td>
							<td>Peñalolen</td>
						</tr>
						<tr>
							<td>Sector</td>
							<td>La Victoria</td>
						</tr>
						<tr>
							<td>Dirección</td>
							<td>Calle San Vicente 2945</td>
						</tr>
						<tr>
							<td>Obras</td>
							<td>Construccion de mufa 48F</td>
						</tr>
						<tr>
							<td>Planta Matriz</td>
							<td>Peñalolen central VTR</td>
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
							<td>Pedro Yanez</td>
						</tr>
						<tr>
							<td>Comentarios</td>
							<td>-</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

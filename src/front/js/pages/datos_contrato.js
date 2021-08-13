import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
//import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/app.scss";

export const Datos_contrato = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container">
			<div className="row">
				<table className="table table-bordered ">
					<tbody>
						<tr>
							<th scope="row">ID PROJECT:</th>
							<td>VTR-919301</td>
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
							<td>Obras</td>
							<td>Construccion de mufa y NAps, recorrido de 4km de cable de FO</td>
						</tr>
						<tr>
							<td>Planta Matriz</td>
							<td>Peñalolen central VTR</td>
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
								<button type="button" className="btn btn-secondary col-md-4 col-lg-2">
									Acceder
								</button>
							</td>
						</tr>
						<tr>
							<td>HP</td>
							<td>512</td>
						</tr>
						<tr>
							<td>CTO</td>
							<td>0</td>
						</tr>
						<tr>
							<td>NAP</td>
							<td>4</td>
						</tr>
						<tr>
							<td>Modelo de cable</td>
							<td>MT-48FO</td>
						</tr>
						<tr>
							<td>Supervisor</td>
							<td>Larry</td>
						</tr>
						<tr>
							<td>Tecnico</td>
							<td>Pedro Yanez Luis salgado Felipe Valenzuela</td>
						</tr>
						<tr>
							<td>Comentarios</td>
							<td>Zona con muchos arboles</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

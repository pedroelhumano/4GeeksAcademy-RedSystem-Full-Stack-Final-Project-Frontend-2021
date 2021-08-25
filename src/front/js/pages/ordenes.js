import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/app.scss";
import { Listastotal } from "../component/listastotal.js";

//react-bootstrap
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Ordenes = props => {
	return (
		<div className="container">
			<ul className="list-group container-fluid">
				<Listastotal
					status="bg-warning"
					id_nombre="MUFA-01"
					url_info="datos_orden"
					textbutton2="Acreditar"
					url_orden="Editar"
				/>
				<Listastotal
					status="bg-warning"
					id_nombre="MUFA-02"
					url_info="datos_orden"
					textbutton2="Acreditar"
					url_orden="Editar"
				/>
				<Listastotal
					status="bg-warning"
					id_nombre="NAP-01"
					url_info="datos_orden"
					textbutton2="Acreditar"
					url_orden="Editar"
				/>
				<Listastotal
					status="bg-warning"
					id_nombre="NAP-02"
					url_info="datos_orden"
					textbutton2="Acreditar"
					url_orden="Editar"
				/>
				<Listastotal
					status="bg-warning"
					id_nombre="NAP-03"
					url_info="datos_orden"
					textbutton2="Acreditar"
					url_orden="Editar"
				/>
			</ul>
			<div className="row justify-content-md-center mt-3">
				<div className="col-md-auto ">
					<Button variant="primary">
						<Link className="text-light" to="/crear_orden">
							Crear Orden de trabajo
						</Link>
					</Button>{" "}
				</div>
			</div>
		</div>
	);
};

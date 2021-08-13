import React from "react";
import { Link, useParams } from "react-router-dom";
//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/js/bootstrap.js";
//import $ from "jquery";
//import Popper from "popper.js";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link to="/">
				<img
					src="https://freepikpsd.com/media/2019/11/eagle-icon-png-1-Transparent-Images.png"
					width="40"
					height="40"
					alt=""
				/>
			</Link>

			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
				</form>
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Crear Contratos
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Contratos
						</Link>
					</li>

					<li className="nav-item">
						<Link className="nav-link" to="/">
							Administrar Usuarios
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/">
							Configuracion
						</Link>
					</li>
				</ul>
				<Link to="login">
					<button className="btn btn-outline-success my-2 my-sm-0" type="link">
						Cerrar Sesion
					</button>
				</Link>
			</div>
		</nav>
	);
};

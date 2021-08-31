import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import injectContext from "../store/appContext";

//react-bootstrap
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Menusup = () => {
	const { store, actions } = useContext(Context);
	return (
		<header>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="mb-3">
				<Navbar.Brand>
					<Link to="/dashboard">
						<img
							src="https://freepikpsd.com/media/2019/11/eagle-icon-png-1-Transparent-Images.png"
							width="40"
							height="40"
							alt=""
						/>
					</Link>
				</Navbar.Brand>
				<Nav>
					<Link className="nav-link" to="/dashboard">
						RedSystem
					</Link>
				</Nav>

				{/* <Navbar.Brand>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
					</form>
				</Navbar.Brand> */}

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav>
							<Link className="nav-link" to="/contratos">
								Contratos
							</Link>
						</Nav>
						<Nav>
							<Link className="nav-link" to="/crear_contrato">
								Crear Contratos
							</Link>
						</Nav>
						<Nav>
							<Link className="nav-link" to="/usuarios">
								Administrar Usuarios
							</Link>
						</Nav>
						{/* <Nav>
							<Link className="nav-link" to="/configuracion">
								Configuracion
							</Link>
						</Nav> */}
						<Nav>
							<Link className="nav-link" to="/cambiar_contrasena">
								Cambiar Contraseña
							</Link>
						</Nav>
					</Nav>
					<Nav>
						<Nav>
							<Link
								className="btn btn-outline-success"
								to="/"
								onClick={() => {
									actions.borrarToken();
								}}>
								Cerrar Sesion
							</Link>
						</Nav>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

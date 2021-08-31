import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
//import ScrollToTop from "./component/scrollToTop";

import { Contratos } from "./pages/pages_contratos/contratos";
import { Login } from "./pages/pages_globales/login";
import injectContext from "./store/appContext";
import { Context } from "../js/store/appContext";
import { PropTypes } from "prop-types";

//Nuestros componentes importados
import { Menusup } from "./component/Menusup";
import { Footer } from "./component/footer";

//Nuestras paginas importadas
import { Crearcontrato } from "./pages/crear_contrato";
import { Datos_contrato } from "./pages/pages_contratos/datos_contrato";
import { Ordenes } from "./pages/ordenes";
import { Datos_orden } from "./pages/datos_orden";
import { Cuatrocerocuatro } from "./pages/pages_globales/404";
import { Contactenos } from "./pages/pages_globales/contactanos";
import { Register } from "./pages/pages_globales/register";
import { CambiarContrasena } from "./pages/pages_globales/cambiar_contrasena";
import { VerFotosOrden } from "./pages/ver_fotos_orden";
import { Listausuarios } from "./pages/pages_usuarios/listausers";
import { Datosuser } from "./pages/pages_usuarios/Datosuser";
import { Editaruser } from "./pages/pages_usuarios/edicionuser";
import { Landing } from "./pages/landing";
import { Crearordentrabajo } from "./pages/crearordentrabajo";
import { Editarcontrato } from "./pages/pages_contratos/editar_contrato";
import { Editarorden } from "./pages/editar_orden";
import { Crear_orden_page } from "./pages/crear_orden_page";
import { Dashboard, dashboard } from "./pages/dashboard";

//Nuestros componentes importados
//import { Listatrabajo } from "./component/listatrabajo";
const Wrapper = ({ children }) => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	useEffect(
		() => {
			!store.user.token ? history.push("/") : history.push("/contratos");
			/* actions.getToken(); */
		},
		[store.user.token]
	);
	return <div>{children}</div>;
};

Wrapper.propTypes = {
	children: PropTypes.node
};

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				{/* <ScrollToTop> */}
				<Wrapper>
					<Switch>
						<Route exact path="/">
							<Landing />
						</Route>

						{/* <Route exact path="/demo">
							<Menusup />
							<Demo />
						</Route> */}
						{/* <Route exact path="/single/:theid">
						<Menusup />
						<Single />
					</Route> */}
						{/* NUESTRAS RUTAS */}
						{/*Rutas generales */}
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/cambiar_contrasena">
							<Menusup />
							<CambiarContrasena />
						</Route>
						<Route exact path="/dashboard">
							<Menusup />
							<Dashboard />
						</Route>
						<Route exact path="/contratos">
							<Menusup />
							<Contratos />
						</Route>
						{/*Rutas admin*/}
						<Route exact path="/usuarios">
							<Menusup />
							<Listausuarios />
						</Route>
						<Route exact path="/configuracion">
							<Menusup />
							<Datosuser />
						</Route>
						<Route exact path="/configuracion/:id">
							<Menusup />
							<Datosuser />
						</Route>
						<Route exact path="/editar_user">
							<Menusup />
							<Editaruser />
						</Route>
						<Route exact path="/editar_user/:id">
							<Menusup />
							<Editaruser />
						</Route>
						<Route exact path="/editar_contrato/:id">
							<Menusup />
							<Editarcontrato />
						</Route>
						<Route exact path="/crear_contrato">
							<Menusup />
							<Crearcontrato />
						</Route>
						<Route exact path="/crear_orden">
							<Menusup />
							<Crearordentrabajo />
						</Route>
						{/*Rutas solo tecnico*/}
						<Route exact path="/datos_contrato">
							<Menusup />
							<Datos_contrato />
						</Route>
						<Route exact path="/datos_contrato/:id">
							<Menusup />
							<Datos_contrato />
						</Route>
						<Route exact path="/ordenes">
							<Menusup />
							<Ordenes />
						</Route>
						<Route exact path="/ordenes/:id">
							<Menusup />
							<Ordenes />
						</Route>
						<Route exact path="/ordenes/datos_orden/:id">
							<Menusup />
							<Datos_orden />
						</Route>
						{/* Ruta para editar una orden de trabajo */}
						<Route exact path="/ordenes/editar_orden/:id">
							<Menusup />
							<Editarorden />
						</Route>
						{/* ruta para CREAR una orden de trabajo basada en un contrato */}
						<Route exact path="/ordenes/crear_orden/:id">
							{/* crear_orden */}
							<Menusup />
							<Crear_orden_page />
						</Route>
						<Route exact path="/datos_orden">
							<Menusup />
							<Datos_orden />
						</Route>
						<Route exact path="/ver_fotos_orden">
							<Menusup />
							<VerFotosOrden />
						</Route>
						<Route exact path="/contacto">
							<Contactenos />
						</Route>
						<Route exact path="/landing">
							<Landing />
						</Route>
						{/*Ruta del 404*/}
						<Route>
							<Cuatrocerocuatro />
						</Route>
					</Switch>
				</Wrapper>
				<Footer />
				{/* </ScrollToTop> */}
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

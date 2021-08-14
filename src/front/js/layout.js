import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//Nuestras paginas importadas
import { Datos_contrato } from "./pages/datos_contrato";
import { Ordenes } from "./pages/ordenes";
import { Datos_orden } from "./pages/datos_orden";
import { Cuatrocerocuatro } from "./pages/404";
import { Contactenos } from "./pages/contactanos";
import { RestablecerContrasena } from "./pages/restablecer_contrasena";
import { CambiarContrasena } from "./pages/cambiar_contrasena";
import { VerFotosOrden } from "./pages/ver_fotos_orden";

//Nuestros componentes importados
//import { Listatrabajo } from "./component/listatrabajo";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Navbar />
							<Home />
						</Route>
						<Route exact path="/demo">
							<Navbar />
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Navbar />
							<Single />
						</Route>
						{/* NUESTRAS RUTAS */}
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/restablecer_contrasena">
							<RestablecerContrasena />
						</Route>
						<Route exact path="/cambiar_contrasena">
							<Navbar />
							<CambiarContrasena />
						</Route>
						<Route exact path="/datos_contrato">
							<Navbar />
							<Datos_contrato />
						</Route>
						<Route exact path="/ordenes">
							<Navbar />
							<Ordenes />
						</Route>
						<Route exact path="/datos_orden">
							<Navbar />
							<Datos_orden />
						</Route>
						<Route exact path="/ver_fotos_orden">
							<Navbar />
							<VerFotosOrden />
						</Route>
						<Route exact path="/contacto">
							<Navbar />
							<Contactenos />
						</Route>
						<Route>
							<Cuatrocerocuatro />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

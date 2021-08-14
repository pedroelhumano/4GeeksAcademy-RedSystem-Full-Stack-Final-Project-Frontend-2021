import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import redSystemLogo from "../../img/red-system-logo.png";
import "../../styles/login.scss";
import { InputGroup } from "../component/inputGroup";
import { Link, useParams } from "react-router-dom";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const [recuperar, setRecuperar] = useState(false);

	if (!recuperar) {
		return (
			<div className="container d-flex flex-column align-items-center justify-content-center w-100 fadeInDown pt-5">
				<div id="formContent" className="my-3">
					<div className="fadeIn first container d-flex justify-content-center align-items-center my-4">
						<img src={redSystemLogo} id="icon" alt="Business icon" />
						<h1 className="align-self-center mb-0">RedSystem</h1>
					</div>
					<form className="container d-flex flex-column align-items-center">
						<InputGroup
							label="Dirección de correo"
							icon="fas fa-user"
							type="email"
							placeholder="Correo@ejemplo.com"
						/>
						<InputGroup
							label="Introduce tu contraseña"
							icon="fas fa-key"
							type="password"
							placeholder="Contraseña"
						/>
						<button
							type="button"
							className="btn btn-link underlineHover"
							onClick={() => setRecuperar(true)}>
							¿Olvidaste tu contraseña?
						</button>
						<button type="submit" className="fadeIn first btn bg-primary text-white my-4 px-5">
							INGRESAR
						</button>
					</form>

					<div id="formFooter" className="p-3">
						<p className="mb-0">
							{" "}
							¿No tienes una cuenta?{" "}
							<button type="button" className="btn btn-link underlineHover">
								Regístrate en RedSystem
							</button>
						</p>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container d-flex flex-column align-items-center justify-content-center w-100 fadeInDown pt-5">
				<div id="formContent" className="mb-3">
					<div className="fadeIn first container d-flex justify-content-center align-items-center my-4">
						<img src={redSystemLogo} id="icon" alt="Business icon" />
						<h1 className="align-self-center mb-0">RedSystem</h1>
					</div>
					<div className="alert alert-primary mx-4" role="alert">
						<h4 className="alert-heading">
							<i className="fas fa-user-lock" /> ¿Has olvidado tu contraseña?
						</h4>
						<hr />
						<p className="mb-0 text-justify">
							Si no recuerdas tu contraseña, introduce tu correo y te enviaremos un enlace con las
							instrucciones para restablecerla.
						</p>
					</div>
					<form className="container d-flex flex-column align-items-center">
						<InputGroup
							label="Dirección de correo"
							icon="fas fa-envelope"
							type="email"
							placeholder="Correo@ejemplo.com"
						/>
						<div className="container px-2 d-flex justify-content-between">
							<button
								type="submit"
								className="btn btn-outline-primary btn-sm mb-4 mt-0"
								onClick={() => setRecuperar(false)}>
								<i className="fas fa-undo" /> Volver al inicio de sesión
							</button>
							<Link to="restablecer_contrasena">
								<button
									/* type="submit" */
									type="link"
									className="btn bg-success text-white btn-sm mb-4 mt-0">
									{" "}
									{/* Aquí debería ir la conexión a la API para mandar correo electrónico de recuperación de contraseña */}
									ENVIAR
								</button>
							</Link>
						</div>
					</form>
					<div id="formFooter" className="p-3">
						<p className="mb-0">
							{" "}
							¿No tienes una cuenta?{" "}
							<button type="button" className="btn btn-link underlineHover">
								Regístrate en RedSystem
							</button>
						</p>
					</div>
				</div>
			</div>
		);
	}
};

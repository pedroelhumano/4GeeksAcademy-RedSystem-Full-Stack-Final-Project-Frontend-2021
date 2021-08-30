import React, { useContext, useEffect, useState } from "react";
import injectContext from "../../store/appContext";
import { Context } from "../../store/appContext";
import redSystemLogo from "../../../img/red-system-logo.png";
import "../../../styles/login.scss";
import { InputGroup } from "../../component/inputGroup";
import { Link, useParams } from "react-router-dom";
import { URL } from "../../config/index";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const [recuperar, setRecuperar] = useState(false);
	const [campoEmail, setCampoEmail] = useState("");
	const [campoPassword, setCampoPassword] = useState("");
	const [campoRecuperar, setCampoRecuperar] = useState("");
	const [respuesta, setRespuesta] = useState("");

	const recuperarContrasena = e => {
		e.preventDefault();

		let cambio = {
			email: campoRecuperar
		};

		fetch(URL + "recuperarc", {
			method: "PUT",
			headers: {
				"Content-Type": "application/json;charset=UTF-8"
			},
			body: JSON.stringify(cambio)
		})
			.then(res => res.json())
			.then(data => {
				setRespuesta(data.msg);
				if (data.msg == "Contraseña restablecida. Revisa tu correo electrónico") {
					setCampoRecuperar(data.contrasena);
				}
			});
	};

	const logearse = e => {
		e.preventDefault();

		actions.hacerLogin({
			email: campoEmail,
			password: campoPassword
		});
	};

	const handleRecuperar = cambio => {
		setCampoRecuperar(cambio);
	};
	const handleChangeEmail = cambio => {
		setCampoEmail(cambio);
	};
	const handleChangePassword = cambio => {
		setCampoPassword(cambio);
	};

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
							valor={campoEmail}
							valorChange={handleChangeEmail}
						/>
						<InputGroup
							label="Introduce tu contraseña"
							icon="fas fa-key"
							type="password"
							placeholder="Contraseña"
							valor={campoPassword}
							valorChange={handleChangePassword}
						/>
						<p className="text-danger">{store.message}</p>
						<button
							type="button"
							className="btn btn-link underlineHover"
							onClick={() => setRecuperar(true)}>
							¿Olvidaste tu contraseña?
						</button>
						<button
							type="submit"
							className="fadeIn first btn bg-primary text-white my-4 px-5"
							onClick={e => logearse(e)}>
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
				<div id="formContent" className="my-3">
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
							valor={campoRecuperar}
							valorChange={handleRecuperar}
						/>
						{respuesta == "Contraseña restablecida. Revisa tu correo electrónico" ? (
							<p className="text-success mb-3">{respuesta}</p>
						) : (
							<p className="text-danger mb-3">{respuesta}</p>
						)}
						<div className="container px-2 d-flex justify-content-between">
							<button
								type="submit"
								className="btn btn-outline-primary btn-sm mb-4 mt-0"
								onClick={() => setRecuperar(false)}>
								<i className="fas fa-undo" /> Volver al inicio de sesión
							</button>
							<button
								type="submit"
								className="btn bg-success text-white btn-sm mb-4 mt-0"
								onClick={e => recuperarContrasena(e)}
								disabled={campoRecuperar == ""}>
								{" "}
								ENVIAR
							</button>
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

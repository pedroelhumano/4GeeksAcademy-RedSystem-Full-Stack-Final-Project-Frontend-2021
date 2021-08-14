import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import redSystemLogo from "../../img/red-system-logo.png";
import "../../styles/login.scss";
import { InputGroup } from "../component/inputGroup";
import { Link, useParams } from "react-router-dom";

export const RestablecerContrasena = () => {
	const { store, actions } = useContext(Context);

	const [recuperar, setRecuperar] = useState(false);

	/* window.onload = function verificar() {
		let x = "<i className='fas fa-check-circle text-success' /> La contraseña debe contener al menos un número";
		document.getElementById("condicionu").innerHTML = x;
	}; */

	return (
		<div className="container d-flex flex-column align-items-center justify-content-center w-100 fadeInDown pt-5">
			<div id="formContent" className="my-3">
				<div className="fadeIn first container d-flex justify-content-center align-items-center my-4">
					<img src={redSystemLogo} id="icon" alt="Business icon" />
					<h1 className="align-self-center mb-0">RedSystem</h1>
				</div>
				<div className="alert alert-danger mx-4" role="alert">
					<h4 className="alert-heading">
						<i className="fas fa-user-lock" /> Restablecer Contraseña
					</h4>
				</div>
				<form className="container d-flex flex-column align-items-center">
					<InputGroup
						label="Introduce tu nueva contraseña"
						icon="fas fa-lock"
						type="password"
						placeholder="Contraseña"
						name="ncontrasena"
					/>
					<InputGroup
						label="Confirma tu nueva contraseña"
						icon="fas fa-lock"
						type="password"
						placeholder="Confirmar Contraseña"
						name="rcontrasena"
					/>
					<div className="d-flex flex-column justify-content-start">
						<div className="d-flex flex-row align-items-start mb-0 p-2">
							<h6 className="mb-0 font-italic text-left" id="condicionu">
								<i className="fas fa-exclamation-circle text-danger" /> La contraseña debe contener al
								menos un número
							</h6>
							{/* <button onClick={() => alert(document.getElementById("ncontrasena").value.includes("2"))}>
								mosca
							</button> */}
						</div>
						<div className="d-flex flex-row align-items-start mb-0 p-2">
							<h6 className="mb-0 font-italic text-left">
								<i className="fas fa-check-circle text-success" /> La contraseña debe tener al menos un
								caracter especial (%,$,#,*,!,.)
							</h6>
						</div>
						<div className="d-flex flex-row align-items-start mb-0 p-2">
							<h6 className="mb-0 font-italic text-left">
								<i className="fas fa-exclamation-circle text-danger" /> Las contraseñas deben de iguales
							</h6>
						</div>
					</div>
					<button type="submit" className="fadeIn first btn bg-primary text-white my-4 px-5">
						CAMBIAR CONTRASEÑA
					</button>
				</form>
			</div>
		</div>
	);
};
/* {document
	.getElementById("ncontrasena")
	.value.includes(
		"0" || "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9"
	) ? (
	<i className="fas fa-check-circle text-success" />
) : (
	<i className="fas fa-exclamation-circle text-danger" />
)} */

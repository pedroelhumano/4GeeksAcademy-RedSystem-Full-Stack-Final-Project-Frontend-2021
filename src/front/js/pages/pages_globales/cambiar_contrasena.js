import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import redSystemLogo from "../../../img/red-system-logo.png";
import "../../../styles/login.scss";
import { InputGroup } from "../../component/inputGroup";
import { Link, useParams } from "react-router-dom";
import { URL } from "../../config/index";

export const CambiarContrasena = () => {
	const { store, actions } = useContext(Context);
	const [respuesta, setRespuesta] = useState("");
	const [campoActual, setCampoActual] = useState("");
	const [campoNueva, setCampoNueva] = useState("");
	const [campoConfirma, setCampoConfirma] = useState("");

	const cambiarcontrasena = e => {
		e.preventDefault();

		let cambio = {
			actual: campoActual,
			nueva: campoNueva
		};

		fetch(URL + "cambiarc/" + String(store.user.id), {
			method: "PUT",
			headers: {
				"Content-Type": "application/json;charset=UTF-8",
				Authorization: `Bearer ${localStorage.getItem("token")}`
			},
			body: JSON.stringify(cambio)
		})
			.then(res => res.json())
			.then(data => {
				setRespuesta(data.msg);
				if (data.msg == "Contraseña cambiada exitosamente") {
					alert("¡Contraseña cambiada exitosamente!");
					setCampoActual("");
					setCampoNueva("");
					setCampoConfirma("");
				}
			});
	};

	const handleChangeActual = cambio => {
		setCampoActual(cambio);
	};
	const handleChangeNueva = cambio => {
		setCampoNueva(cambio);
	};
	const handleChangeConfirma = cambio => {
		setCampoConfirma(cambio);
	};

	/* window.onload = function verificar() {
		let x = "<i className='fas fa-check-circle text-success' /> La contraseña debe contener al menos un número";
		document.getElementById("condicionu").innerHTML = x;
	}; */

	return (
		<div className="container d-flex flex-column align-items-center justify-content-center w-100 fadeInDown pt-2">
			<div id="formContent" className="my-3">
				<div className="fadeIn first container d-flex justify-content-center align-items-center my-4">
					<img src={redSystemLogo} id="icon" alt="Business icon" />
					<h1 className="align-self-center mb-0">RedSystem</h1>
				</div>
				<div className="alert alert-warning mx-4" role="alert">
					<h4 className="alert-heading">
						<i className="fas fa-sync-alt" /> Cambiar Contraseña
					</h4>
				</div>
				<form className="container d-flex flex-column align-items-center">
					<InputGroup
						label="Introduce tu contraseña actual"
						icon="fas fa-lock"
						type="password"
						placeholder="Contraseña"
						name="acontrasena"
						valor={campoActual}
						valorChange={handleChangeActual}
					/>
					<InputGroup
						label="Introduce tu nueva contraseña"
						icon="fas fa-lock"
						type="password"
						placeholder="Contraseña"
						name="ncontrasena"
						valor={campoNueva}
						valorChange={handleChangeNueva}
					/>
					<InputGroup
						label="Confirma tu nueva contraseña"
						icon="fas fa-lock"
						type="password"
						placeholder="Confirmar Contraseña"
						name="rcontrasena"
						valor={campoConfirma}
						valorChange={handleChangeConfirma}
					/>
					<div className="d-flex flex-column justify-content-start">
						<div className="d-flex flex-row align-items-start mb-0 p-2">
							<h6 className="mb-0 font-italic text-left" id="condicionu">
								<i
									className={
										campoNueva.includes("1") ||
										campoNueva.includes("2") ||
										campoNueva.includes("3") ||
										campoNueva.includes("4") ||
										campoNueva.includes("5") ||
										campoNueva.includes("6") ||
										campoNueva.includes("7") ||
										campoNueva.includes("8") ||
										campoNueva.includes("9") ||
										campoNueva.includes("0")
											? "fas fa-check-circle text-success"
											: "fas fa-exclamation-circle text-danger"
									}
								/>{" "}
								La contraseña debe contener al menos un número
							</h6>
							{/* <button onClick={() => alert(document.getElementById("ncontrasena").value.includes("2"))}>
								mosca
							</button> */}
						</div>
						<div className="d-flex flex-row align-items-start mb-0 p-2">
							<h6 className="mb-0 font-italic text-left">
								<i
									className={
										campoNueva.includes("%") ||
										campoNueva.includes("$") ||
										campoNueva.includes("#") ||
										campoNueva.includes("*") ||
										campoNueva.includes("!") ||
										campoNueva.includes(".")
											? "fas fa-check-circle text-success"
											: "fas fa-exclamation-circle text-danger"
									}
								/>{" "}
								La contraseña debe tener al menos un caracter especial (%,$,#,*,!,.)
							</h6>
						</div>
						<div className="d-flex flex-row align-items-start mb-0 p-2">
							<h6 className="mb-0 font-italic text-left">
								<i
									className={
										campoNueva.length > 5
											? "fas fa-check-circle text-success"
											: "fas fa-exclamation-circle text-danger"
									}
								/>{" "}
								La contraseña debe tener al menos 6 caracteres
							</h6>
						</div>
						<div className="d-flex flex-row align-items-start mb-0 p-2">
							<h6 className="mb-0 font-italic text-left">
								<i
									className={
										campoNueva == campoConfirma && campoNueva != ""
											? "fas fa-check-circle text-success"
											: "fas fa-exclamation-circle text-danger"
									}
								/>{" "}
								Las contraseñas deben de iguales
							</h6>
						</div>
					</div>
					{respuesta == "Contraseña cambiada exitosamente" ? (
						<p className="text-success mb-0">{respuesta}</p>
					) : (
						<p className="text-danger mb-0">{respuesta}</p>
					)}
					<div className="d-flex flex-row align-items-between my-3">
						<Link to="/contratos">
							<button type="submit" className="fadeIn first btn btn-warning text-white m-2">
								<i className="fas fa-undo" /> REGRESAR
							</button>
						</Link>

						<button
							type="submit"
							className="fadeIn first btn btn-primary text-white m-2"
							onClick={e => cambiarcontrasena(e)}
							disabled={campoActual == "" || campoNueva == "" || campoConfirma == ""}>
							CAMBIAR CONTRASEÑA
						</button>
					</div>
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

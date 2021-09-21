import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../store/appContext";
import redSystemLogo from "../../../img/red-system-logo.png";
import "../../../styles/login.scss";
import { InputGroup } from "../../component/inputGroup";
import { Link, useParams } from "react-router-dom";
import { URL } from "../../config/index";

export const Register = () => {
	const { store, actions } = useContext(Context);

	const [respuesta, setRespuesta] = useState("");
	const [campoNombre, setCampoNombre] = useState("");
	const [campoApellido, setCampoApellido] = useState("");
	const [campoRut, setCampoRut] = useState("");
	const [campoTelefono, setCampoTelefono] = useState("");
	const [campoEmail, setCampoEmail] = useState("");
	const [campoNueva, setCampoNueva] = useState("");
	const [campoConfirma, setCampoConfirma] = useState("");

	// FUNCION ALGORITMO PARA RUT
	function validarrut(rut) {
		//let elrut = campoRut.split(".");
		let validador = campoRut.slice(-1);
		if (validador == "k") {
			validador = "K";
		}
		let numero = campoRut.substring(0, campoRut.length - 2);
		let multiplicador = 2;
		//let sindigito = elrut.split("-");
		console.log("El numero validor es: " + validador);
		console.log("El numero del rut es: " + numero);
		let ultimodigito = 0;
		let aux = numero;
		let suma = 0;
		for (let i = numero.length; i > 0; i--) {
			ultimodigito = parseInt(aux.slice(-1));
			console.log("El ultimo digito es: " + ultimodigito + " se multiplica por " + multiplicador);
			suma = suma + ultimodigito * multiplicador;
			console.log("La suma es: " + suma);
			aux = aux.substring(0, aux.length - 1);
			console.log("Lo que queda es: " + aux);
			multiplicador++;
			if (multiplicador == 8) {
				multiplicador = 2;
			}
		}
		let modulo = 11 - (suma % 11);
		let resultado = "";
		if (modulo == 11) {
			resultado = "0";
		} else if (modulo == 10) {
			resultado = "K";
		} else {
			resultado = modulo.toString();
		}
		console.log("El validador es: " + modulo);
		if (resultado == validador.toString()) {
			console.log("El validador es correcto");
			return true;
		} else {
			console.log("El validador NO es correcto");
			return false;
		}
	}

	const crearUsuario = e => {
		e.preventDefault();

		let entrada = {
			email: campoEmail,
			password: campoNueva,
			rut: campoRut,
			name: campoNombre,
			lastname: campoApellido,
			contact: campoTelefono
		};

		//Llamando a funcion verificadora
		if (validarrut(campoRut) == true) {
			fetch(URL + "user", {
				method: "POST",
				headers: {
					"Content-Type": "application/json;charset=UTF-8"
				},
				body: JSON.stringify(entrada)
			})
				.then(res => res.json())
				.then(data => {
					setRespuesta(data.msg);
					if (data.msg == "Usuario creado exitosamente") {
						alert("¡Usuario creado exitosamente!");
						setCampoNombre("");
						setCampoApellido("");
						setCampoRut("");
						setCampoTelefono("");
						setCampoNueva("");
						setCampoEmail("");
						setCampoConfirma("");
					}
				});
		} else {
			alert("Verifica el rut");
		}
	};

	const handleChangeEmail = cambio => {
		setCampoEmail(cambio);
	};
	const handleChangeNueva = cambio => {
		setCampoNueva(cambio);
	};
	const handleChangeConfirma = cambio => {
		setCampoConfirma(cambio);
	};

	return (
		<div className="container d-flex flex-column align-items-center justify-content-center w-100 fadeInDown pt-5">
			<div id="formContent" className="my-3">
				<div className="fadeIn first container d-flex justify-content-center align-items-center my-4">
					<img src={redSystemLogo} id="icon" alt="Business icon" />
					<h1 className="align-self-center mb-0">RedSystem</h1>
				</div>
				<div className="alert alert-primary mx-4" role="alert">
					<h4 className="alert-heading mb-0">
						<i className="fas fa-file-signature" /> Registrarse
					</h4>
				</div>
				<form className="container d-flex flex-column align-items-center">
					<div className="container-fluid d-flex flex-row align-items-between my-2 px-2">
						<h6 className="text-left align-self-center mb-0 mr-2">Nombre</h6>
						<input
							type=""
							className="form-control"
							placeholder="Escribe tu nombre"
							onChange={e => setCampoNombre(e.target.value)}
							value={campoNombre}
						/>
					</div>
					<div className="container-fluid d-flex flex-row align-items-between my-2 px-2">
						<h6 className="text-left align-self-center mb-0 mr-2">Apellido</h6>
						<input
							type=""
							className="form-control"
							placeholder="Escribe tu apellido"
							onChange={e => setCampoApellido(e.target.value)}
							value={campoApellido}
						/>
					</div>
					<div className="container-fluid d-flex flex-row align-items-between my-2 px-2">
						<h6 className="text-left align-self-center mb-0 mr-2">RUT</h6>
						<input
							type=""
							className="form-control"
							placeholder="11222333-0"
							onChange={e => setCampoRut(e.target.value)}
							value={campoRut}
						/>
					</div>
					<i className="legendadelrut">
						<h6>Sin puntos con guion en codigo verificador</h6>
					</i>
					<div className="container-fluid d-flex flex-row align-items-between my-2 px-2">
						<h6 className="text-left align-self-center mb-0 mr-2">Telefono de Contacto</h6>
						<input
							type="number"
							className="form-control"
							placeholder="Escribe tu teléfono"
							onChange={e => setCampoTelefono(e.target.value)}
							value={campoTelefono}
						/>
					</div>
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
						icon="fas fa-lock"
						type="password"
						placeholder="Contraseña"
						valor={campoNueva}
						valorChange={handleChangeNueva}
					/>
					<InputGroup
						label="Confirma tu contraseña"
						icon="fas fa-lock"
						type="password"
						placeholder="Confirmar Contraseña"
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
						{respuesta == "Usuario creado exitosamente" ? (
							<p className="text-success mb-0">{respuesta}</p>
						) : (
							<p className="text-danger mb-0">{respuesta}</p>
						)}
					</div>
					<div className="d-flex flex-column align-items-between justify-content-center my-1">
						<button
							type="submit"
							className="fadeIn first btn bg-primary text-white my-3 px-5"
							onClick={e => crearUsuario(e)}
							disabled={
								campoEmail == "" ||
								campoNueva == "" ||
								campoConfirma == "" ||
								campoNueva != campoConfirma
							}>
							REGISTRARSE
						</button>
						<Link className="m-0 p-0" to="/login">
							<button type="submit" className="btn btn-outline-primary btn-sm mb-2 mt-0">
								<i className="fas fa-undo" /> Volver al inicio de sesión
							</button>
						</Link>
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

import React, { useState } from "react";
//import figure from "react-bootstrap/figure";
import pedroyanezIMG from "../../../img/pedroyanez.jpg";
import luissalgado from "../../../img/luissalgado.jpg";
import felipevalenzuela from "../../../img/felipevalenzuela.jpeg";
import "../../../styles/app.scss";
import "../../../styles/contactenos.scss";
//Componentes importados
import { Container, Row, Col, Card, Button, CardGroup, Image, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Importamos emailJS
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

export const Contactenos = props => {
	//MODAL
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//FIN MODAL
	function sendEmail(e) {
		e.preventDefault();
		emailjs
			// .sendForm("service_a7lauxf", "template_7mhf428", e.target, "user_IQLHNvSLvvs1yvAC048F1")
			.sendForm("service_pc6libi", "template_7mhf428", e.target, "user_IQLHNvSLvvs1yvAC048F1")
			.then(res => {
				console.log(res);
			})
			.catch(err => console.log(err));
	}
	return (
		<div className="container mt-5 pt-5">
			<Row>
				<Col>
					<div style={{ width: "440px" }} className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img src={pedroyanezIMG} className="img-fluid rounded-start" alt="..." />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Pedro Yanez</h5>
									<p className="card-text">
										<small className="text-muted">
											Tecnico Telecomunicaciones/FullStack Developer
										</small>
									</p>
									<p className="card-text">Apasionado por el desarrollo, zombie 2.0, futuro Jedi.</p>
								</div>
							</div>
						</div>
					</div>
					<div style={{ width: "440px" }} className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img src={luissalgado} className="img-fluid rounded-start" alt="..." />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Luis Salgado</h5>
									<p className="card-text">
										<small className="text-muted">Ingeniero Informatico/FullStack Developer</small>
									</p>
									<p className="card-text">
										Un mundo que explorar y nada que perder. Los experimentos nunca fallan.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div style={{ width: "440px" }} className="card mb-3">
						<div className="row g-0">
							<div className="col-md-4">
								<img src={felipevalenzuela} className="img-fluid rounded-start" alt="..." />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Felipe Valenzuela</h5>
									<p className="card-text">
										<small className="text-muted">Ingeniero Agronomo/FullStack Developer</small>
									</p>
									<p className="card-text">
										No se como llegue hasta aqui en el curso. Apoyador emocional en el trabajo
										final.
									</p>
								</div>
							</div>
						</div>
					</div>
				</Col>
				<Col>
					<div>
						<Container className="mt-4">
							<h1>Formulario de Contacto</h1>
							<form onSubmit={sendEmail}>
								<div className="form-group">
									<label className="mt-4">Nombre Completo</label>
									<input name="name" className="form-control" placeholder="Nombre y Apellido" />
								</div>
								<div className="form-group">
									<label lassName="mt-4">Email</label>
									<input
										name="email"
										className="form-control"
										type="email"
										placeholder="name@example.com"
									/>
								</div>
								<div className="form-group">
									<label className="mt-4">Comentarios</label>
									<textarea name="message" className="form-control" rows={4} />
								</div>
								{/* <button variant="success" className="btn btn-success" value="Send" type="submit">
									Enviar
								</button> */}
								<button
									className="btn btn-success my-3"
									value="Send"
									variant="primary"
									onClick={handleShow}
									type="submit">
									Enviar
								</button>
								<Modal show={show} onHide={handleClose}>
									<Modal.Header closeButton />
									<Modal.Body>Correo enviado exitosamente</Modal.Body>
									<Modal.Footer>
										<Button variant="success" onClick={handleClose}>
											OK
										</Button>
									</Modal.Footer>
								</Modal>
							</form>
						</Container>
					</div>
				</Col>
			</Row>
		</div>
	);
};

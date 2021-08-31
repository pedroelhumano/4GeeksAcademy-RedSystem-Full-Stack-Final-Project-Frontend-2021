import React from "react";
//import figure from "react-bootstrap/figure";
import pedroyanezIMG from "../../../img/pedroyanez.jpg";
import luissalgado from "../../../img/luissalgado.jpg";
import felipevalenzuela from "../../../img/felipevalenzuela.jpeg";
import "../../../styles/app.scss";
import "../../../styles/contactenos.scss";
//Componentes importados
import { Container, Row, Col, Card, Button, CardGroup, Image, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//Importamos emailJS
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

export const Contactenos = props => {
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
		<div className="container">
			<div className="row mt-3">
				<figure className="snip1336 col col-sm">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg" alt="sample87" />
					<figcaption>
						<img src={pedroyanezIMG} alt="Pedro_Yanez" className="profile" />
						<h2>
							Pedro Yanez
							<span>Tecnico Telecomunicaciones/FullStack Developer</span>
						</h2>
						<p>Apasionado por el desarrollo, zombie 2.0, futuro Jedi (actual padawan).</p>
						<a href="https://github.com/wotanCode" className="follow">
							Github
						</a>
						<a href="https://www.linkedin.com/in/pedro-yanez/" className="info">
							Linkedin
						</a>
					</figcaption>
				</figure>
				<figure className="snip1336 col col-sm">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample74.jpg" alt="sample74" />
					<figcaption>
						<img src={luissalgado} alt="Luis_Salgado" className="profile" />
						<h2>
							Luis Salgado
							<span>Ingeniero Informatico/FullStack Developer</span>
						</h2>
						<p>Un mundo que explorar y nada que perder. Los experimentos nunca fallan</p>
						<a href="https://github.com/LuxSalgado" className="follow">
							Github
						</a>
						<a href="https://www.linkedin.com/in/luxsalgado/" className="info">
							Linkedin
						</a>
					</figcaption>
				</figure>
				<figure className="snip1336 col col-sm">
					<img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample69.jpg" alt="sample69" />
					<figcaption>
						<img src={felipevalenzuela} alt="Felipe_Valenzuela" className="profile" />
						<h2>
							Felipe Valenzuela
							<span>Ingeniero Agronomo/FullStack Developer</span>
						</h2>
						<p>No se como llegue hasta aqui en el curso. Apoyador emocional en el trabajo final</p>
						<a href="https://github.com/Felipe713" className="follow">
							Github
						</a>
						<a href="https://www.linkedin.com/in/felipe-valenzuela-padilla-9a35ab70/" className="info">
							Linkedin
						</a>
					</figcaption>
				</figure>
			</div>
			<div>
				<Container className="mt-4">
					<h1>Formulario de Contacto</h1>
					<form onSubmit={sendEmail}>
						<label className="mt-4">Nombre Completo</label>
						<input name="name" placeholder="Nombre y Apellido" />
						<label lassName="mt-4">Email</label>
						<input name="email" type="email" placeholder="name@example.com" />
						<label className="mt-4">Comentarios</label>
						<textarea name="message" rows={4} />
						<button variant="success" value="Send" type="submit">
							Enviar
						</button>
					</form>
				</Container>
			</div>
		</div>
	);
};

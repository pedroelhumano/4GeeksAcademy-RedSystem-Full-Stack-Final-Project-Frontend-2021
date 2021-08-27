import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext";
//import figure from "react-bootstrap/figure";
import pedroyanezIMG from "../../../img/pedroyanez.jpg";
import luissalgado from "../../../img/luissalgado.jpg";
import felipevalenzuela from "../../../img/felipevalenzuela.jpeg";
import "../../../styles/app.scss";
import "../../../styles/contactenos.scss";

export const Contactenos = props => {
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
		</div>
	);
};

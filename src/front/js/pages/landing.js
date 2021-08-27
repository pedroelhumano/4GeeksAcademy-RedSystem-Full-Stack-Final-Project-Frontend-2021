import React from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/app.scss";
//Componentes importados
import { Container, Row, Col, Card, Button, CardGroup, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import redSystemLogo from "../../img/red-system-logo.png";
import Aplicacion from "../../img/Aplicacion.jpg";
import Conexion from "../../img/Conexion.jpg";
import Gestion from "../../img/Gestion.jpg";
import Legal from "../../img/Legal.jpg";
import Celuaplicacion from "../../img/Celuaplicacion.png";

export const Landing = props => {
	return (
		<div>
			<Container fluid className="bg-info text-white">
				<Container>
					<Row className="justify-content-md-center mb-5">
						{/* <img src={redSystemLogo} width="150" height="150" id="icon" alt="Business icon" /> */}

						<Col className="col-md-auto" lg="2">
							<Image src={redSystemLogo} width="150" height="150" rounded />
							<h1>RedSystem</h1>
						</Col>
					</Row>
					<Row className="justify-content-md-center pb-3">
						<Col classname="col-md-auto" sm="6" md="5" lg="4" xl="3">
							<Image src={Celuaplicacion} width="250" height="400" />
						</Col>
						<Col className="col-md-auto" md="6" lg="5" xl="4" sm="6">
							<p className="h4">
								Gestionas tus proyectos en Telecomunicaciones bajo los altos estandares de la industria.
							</p>
							<p>Aplicacion Web compatible con cualquier dispositivo. </p>
							<Link className="btn btn-primary" to="login">
								Acceder
							</Link>
						</Col>
					</Row>
				</Container>
				{/* <Card className="bg-dark text-white">
					<Card.Img
						src="https://pyme.emol.com/wp-content/uploads/2019/09/Fibra-%C3%B3ptica.jpg"
						alt="Card image"
					/>
					<Card.ImgOverlay>
						<Card.Title>RedSystem</Card.Title>
						<Card.Text>Unidos por la red. De Arica a Punta Arenas.</Card.Text>
						<Card.Text>Saludos</Card.Text>
						<Button href="#">Login</Button>{" "}
					</Card.ImgOverlay>
				</Card> */}
			</Container>
			<Container className="mt-4">
				<CardGroup>
					<Card>
						<Card.Img variant="top" src={Conexion} />
						<Card.Body>
							<Card.Title>Conexion</Card.Title>
							<Card.Text>La aplicacion funciona tanto en dispositivo movil como escritorio.</Card.Text>
						</Card.Body>
					</Card>
					<Card className="mx-2">
						<Card.Img variant="top" src={Gestion} />
						<Card.Body>
							<Card.Title>Gestion de Redes</Card.Title>
							<Card.Text>
								Aplicacion pensada para cumplir los estandares de telecomunicaciones de hoy.{" "}
							</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src={Legal} />
						<Card.Body>
							<Card.Title>Normativas Legales</Card.Title>
							<Card.Text>Cumpliendo los estandares de seguridad requeridos por la industria.</Card.Text>
						</Card.Body>
					</Card>
				</CardGroup>
			</Container>
		</div>
	);
};

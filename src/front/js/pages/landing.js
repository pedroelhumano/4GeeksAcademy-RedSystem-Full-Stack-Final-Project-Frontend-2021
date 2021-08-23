import React from "react";
import "../../styles/app.scss";
//Componentes importados
import { Container, Row, Col, Card, Button, CardGroup, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import redSystemLogo from "../../img/red-system-logo.png";
import Aplicacion from "../../img/Aplicacion.jpg";

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
							<Image src={Aplicacion} width="250" height="200" />
						</Col>
						<Col className="col-md-auto" md="6" lg="5" xl="4" sm="6">
							<p className="h4">
								Gestionas tus proyectos en Telecomunicaciones bajo los altos estandares de la industria.
							</p>
							<p>Aplicacion Web compatible con cualquier dispositivo. </p>
							<Button href="#">Acceder</Button>{" "}
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
						<Card.Img
							variant="top"
							src="https://c8.alamy.com/compes/2aghcy8/un-angulo-bajo-la-foto-de-un-ingeniero-del-proveedor-de-servicio-domestico-la-instalacion-de-nuevos-cables-de-fibra-optica-en-un-hogar-residencial-trabajando-desde-escaleras-con-cinturon-de-herramientas-2aghcy8.jpg"
						/>
						<Card.Body>
							<Card.Title>Conexion</Card.Title>
							<Card.Text>La aplicacion funciona tanto en dispositivo movil como escritorio.</Card.Text>
						</Card.Body>
					</Card>
					<Card className="mx-2">
						<Card.Img
							variant="top"
							src="https://thumbs.dreamstime.com/z/trabajador-de-una-empresa-proveedora-telecomunicaciones-que-trabaja-en-la-implementaci%C3%B3n-cables-fibra-%C3%B3ptica-el-sistema-165577253.jpg"
						/>
						<Card.Body>
							<Card.Title>Gestion de Redes</Card.Title>
							<Card.Text>
								Aplicacion pensada para cumplir los estandares de telecomunicaciones de hoy.{" "}
							</Card.Text>
						</Card.Body>
					</Card>
					<Card>
						<Card.Img variant="top" src="https://i.ytimg.com/vi/tjat-5d4LtE/hqdefault.jpg" />
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

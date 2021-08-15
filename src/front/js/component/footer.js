import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";

export const Footer = () => (
	<footer className="footer py-3 mt-auto bg-info text-dark">
		<div className="footer-copyright text-center">
			© 2021 Copyright:{" "}
			<Link to="login">
				<div className="text-white">RedSystem.com</div>
			</Link>
			{" · "}
			<Link to="contacto">
				<div className="text-white">Contáctenos</div>
			</Link>
		</div>
	</footer>
);

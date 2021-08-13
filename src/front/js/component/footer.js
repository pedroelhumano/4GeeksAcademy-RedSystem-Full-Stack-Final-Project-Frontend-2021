import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";

export const Footer = () => (
	<footer className="footer py-3 mt-auto bg-info text-dark">
		<div className="footer-copyright text-center">
			© 2021 Copyright:{" "}
			<Link to="login">
				<a className="text-white" href="">
					{" "}
					RedSystem.com
				</a>
			</Link>
			{" · "}
			<Link to="demo">
				<a className="text-white" href="">
					{" "}
					Contáctenos
				</a>
			</Link>
		</div>
	</footer>
);

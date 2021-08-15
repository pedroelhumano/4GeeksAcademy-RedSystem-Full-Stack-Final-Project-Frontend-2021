import React, { Component, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// function Example() {
// 	const [show, setShow] = useState(false);

// 	const handleClose = () => setShow(false);
// 	const handleShow = () => setShow(true);

export const ModalCrearContrato = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<>
			<Button className="btn btn-secondary mx-auto mt-4" variant="primary" onClick={handleShow}>
				Crear Contrato
			</Button>
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>Woohoo, youre reading this text in a modal!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};
// render(<Example />);

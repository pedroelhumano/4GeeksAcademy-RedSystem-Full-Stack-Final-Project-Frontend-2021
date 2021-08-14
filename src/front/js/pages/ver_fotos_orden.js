import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/app.scss";

export const VerFotosOrden = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container-fluid">
			<div className="row container-fluid justify-content-center bg-white py-2 px-0 m-0">
				<button type="submit" className="btn btn-success text-white m-2">
					<i className="fas fa-arrow-left" /> Regresar
				</button>
			</div>
			<div className="row container-fluid tab-content fondocuerpo m-0 p-0">
				<div id="collageView" className="tab-pane fade show active">
					<div className="d-flex flex-wrap bg-white">
						<img
							className="img-fluid col-4 collageimg px-1 py-1"
							src="https://estaticos.miarevista.es/uploads/images/gallery/58affd7e5bafe8653852efa1/akita.jpg"
							alt="Foto de un perrito"
						/>
						<img
							className="img-fluid col-4 collageimg px-1 py-1"
							src="https://cuantoviven.org/wp-content/uploads/2021/02/gato.jpg"
							alt="Foto de un gato"
						/>
						<img
							className="img-fluid col-4 collageimg px-1 py-1"
							src="https://gameofhack.com/wp-content/uploads/2021/01/get-your-free-burp-suite.jpg"
							alt="foto de macbook"
						/>
						<img
							className="img-fluid col-4 collageimg px-1 py-1"
							src="https://roboticsandautomationnews.com/wp-content/uploads/2018/08/Pizza-Hut-pizza.jpg"
							alt="Foto de una pizza"
						/>
						<img
							className="img-fluid col-4 collageimg px-1 py-1"
							src="https://d3hnfqimznafg0.cloudfront.net/images/news/ImageForNews_26919_15786618897301054.png"
							alt="Foto de paisaje"
						/>
						<img
							className="img-fluid col-4 collageimg px-1 py-1"
							src="https://i.pinimg.com/originals/f8/22/0a/f8220a35e0b2d9fdbb788f43c84faf18.jpg"
							alt="Foto de living"
						/>
						<img
							className="img-fluid col-4 collageimg px-1 py-1"
							src="https://www.techspot.com/images2/news/bigimage/2020/03/2020-03-04-image-25.jpg"
							alt="foto de amigos"
						/>
						<img
							className="img-fluid col-4 collageimg px-1 py-1"
							src="https://naciondeportes.com/wp-content/uploads/2018/11/edwedwedwed.jpg"
							alt="Foto de estadio"
						/>
						<img
							className="img-fluid col-4 collageimg px-1 py-1"
							src="https://www.ecestaticos.com/image/clipping/1200/675/395fed4b3ecb09dd8f9352a23e105a76/la-protagonista-del-meme-de-disaster-girl-explica-como-surgio-la-foto-del-incendio.jpg"
							alt="Foto de nina"
						/>
						<img
							className="img-fluid col-4 collageimg px-1 py-1"
							src="https://i.redd.it/rexwi5zdll531.jpg"
							alt="Foto de meme"
						/>
						<img
							className="img-fluid col-4 collageimg px-1 py-1"
							src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2020/11/doctor-strange-bruja-escarlata-2131987.jpg"
							alt="Foto de marvel"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

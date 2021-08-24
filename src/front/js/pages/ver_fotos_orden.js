import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/app.scss";

//Componentes importados
import { Imagesfromgallery } from "../component/imagesfromgallery.js";

export const VerFotosOrden = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="container-fluid">
			<div className="row container-fluid justify-content-center bg-white py-2 px-0 m-0">
				<Link to="datos_contrato">
					<button type="submit" className="btn btn-success text-white m-2">
						<i className="fas fa-arrow-left" /> Regresar
					</button>
				</Link>
			</div>
			<div className="row container-fluid tab-content fondocuerpo m-0 p-0">
				<div id="collageView" className="tab-pane fade show active">
					<div className="d-flex flex-wrap bg-white">
						<Imagesfromgallery url_img="https://lanoticia.cl/wp-content/uploads/2021/03/SEC-OHIGGINS-FISCALIZA-QUE-TRABAJOS-DE-CGE-DURANTE-CORTE4.jpg" />
						<Imagesfromgallery url_img="https://img.freepik.com/free-photo/electrical-linemam-worker-climb-bamboo-ladder-repair-wire-telecom-engineer-installing-wire-internet_157563-15.jpg?size=626&ext=jpg" />
						<Imagesfromgallery url_img="https://mk0nationaltodayijln.kinstacdn.com/wp-content/uploads/2020/04/national-lineman-appreciation-day-640x514.jpg" />
						<Imagesfromgallery url_img="http://www.spw.cl/IMG/jpg/pe-mufa4.jpg" />
						<Imagesfromgallery url_img="http://static.tiempo.com.mx/uploads/imagen/imagen/329232/principal_choque%20poste%2002.jpg" />
						<Imagesfromgallery url_img="http://www.spw.cl/IMG/jpg/pe-mufa1.jpg" />
						<Imagesfromgallery url_img="http://hmctec.pe/wp-content/uploads/2018/02/mufa-externa-punto-cero-1024x768.jpeg" />
						<Imagesfromgallery url_img="http://www.spw.cl/IMG/jpg/pe-caja1-detalle.jpg" />
						<Imagesfromgallery url_img="https://i.imgur.com/2UCsnDr.jpeg" />
						<Imagesfromgallery url_img="https://thumbs.dreamstime.com/b/technician-wooden-ladder-installing-fiber-optic-internet-splitter-box-electric-pole-against-blue-sky-rear-view-197452160.jpg" />
						<Imagesfromgallery url_img="https://lanoticia.cl/wp-content/uploads/2021/03/SEC-OHIGGINS-FISCALIZA-QUE-TRABAJOS-DE-CGE-DURANTE-CORTE4.jpg" />
						<Imagesfromgallery url_img="https://img.freepik.com/free-photo/electrical-linemam-worker-climb-bamboo-ladder-repair-wire-telecom-engineer-installing-wire-internet_157563-15.jpg?size=626&ext=jpg" />
						<Imagesfromgallery url_img="https://mk0nationaltodayijln.kinstacdn.com/wp-content/uploads/2020/04/national-lineman-appreciation-day-640x514.jpg" />
					</div>
				</div>
			</div>
		</div>
	);
};

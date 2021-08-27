import React from "react";
import { Link, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import "../../styles/app.scss";

export const Imagesfromgallery = props => {
	return (
		<img className="img-fluid col-4 col-sm-4 col-md-3 col-lg-2 collageimg px-1 py-1" src={props.url_img} alt="" />
	);
};

//Protypes declarado fuera de la funcion export
Imagesfromgallery.propTypes = {
	url_img: PropTypes.string
};

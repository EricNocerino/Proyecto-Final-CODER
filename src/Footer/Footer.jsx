import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

//components
import footer from "../Assets/Footer.png";

const Footer = () => {
	return (
		<Link to="/">
			<img src={footer} alt="banner" width="100%" />
		</Link>
	);
};

export default Footer;

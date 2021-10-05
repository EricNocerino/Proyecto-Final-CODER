import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

//components
import banner from "../Assets/Banner.png";

const Header = () => {
	return (
		<Link to="/">
			<img src={banner} alt="banner" width="100%" />;
		</Link>
	);
};

export default Header;

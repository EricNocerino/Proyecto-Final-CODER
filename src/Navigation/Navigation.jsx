import React from "react";
import { Link } from "react-router-dom";

//components
import "./Navigation.css";
import { MdAccountBalance, MdLocalAtm } from "react-icons/md";
import CartWidget from "../CartWidget/CartWidget";

const Navigation = () => {
	return (
		<div className="Navigation">
			<ul>
				<Link to="/" style={{ color: "black", textDecoration: "none" }}>
					<MdAccountBalance />
					Home
				</Link>

				<Link style={{ color: "black", textDecoration: "none" }}>
					<MdLocalAtm />
					Mis Compras
				</Link>
				<Link to="/cart" style={{ color: "black", textDecoration: "none" }}>
					<CartWidget />
				</Link>
			</ul>
		</div>
	);
};

export default Navigation;

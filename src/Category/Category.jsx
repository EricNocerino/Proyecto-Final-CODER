import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Category = ({ Category }) => {
	return (
		<>
			<Link to="/category/Agujas">
				<Button>Agujas</Button>
			</Link>
			<Link to="/category/Tintas">
				<Button>Tintas</Button>
			</Link>
			<Link to="/category/Insumos">
				<Button>Insumos</Button>
			</Link>
		</>
	);
};

export default Category;

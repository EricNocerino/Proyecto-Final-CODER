import React from "react";
import { Button } from "semantic-ui-react";

const Category = ({ category }) => {
	return (
		<Button.Group>
			<Button>{category.category}</Button>
		</Button.Group>
	);
};

export default Category;

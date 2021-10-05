import React from "react";

//components
import ItemList from "../Items/ItemList";
import CategoryListContainer from "../Category/CategoryListContainer";

const ItemListContainer = () => {
	return (
		<div>
			<CategoryListContainer />
			<ItemList />
		</div>
	);
};

export default ItemListContainer;

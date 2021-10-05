import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../CartContext/CartContext";

export const CartWidget = () => {
	const { totalItemsCart } = useCartContext();

	return (
		<p>
			<FontAwesomeIcon icon={faShoppingCart} />
			{totalItemsCart}
		</p>
	);
};

export default CartWidget;

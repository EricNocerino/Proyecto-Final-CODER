import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import { CartContext } from "../CartContext/CartContext";
import "./CartItem.css";

const CartItem = ({ dataItem }) => {
	const { removeItem, totalItemsPrice } = useContext(CartContext);

	return (
		<tbody>
			<tr>
				<td>
					<img
						className="img-fluid w-100 text-center img-cart-item"
						src={dataItem.img}
						alt={dataItem.title}
					></img>
				</td>
				<td>{dataItem.title}</td>
				<td>{dataItem.price}</td>
				<td>{dataItem.quantity}</td>
				<td>{totalItemsPrice(dataItem.price, dataItem.quantity)}</td>
				<td>
					<Button onClick={() => removeItem(dataItem.id)}> quitar</Button>
				</td>
			</tr>
		</tbody>
	);
};

export default CartItem;

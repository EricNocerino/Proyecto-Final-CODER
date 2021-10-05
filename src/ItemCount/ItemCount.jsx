import { React, useState } from "react";
import { Button, Icon } from "semantic-ui-react"

const ItemCount = ({ initial, stock, onAdd }) => {
	const [stockItems, setStockItems] = useState(initial);

	const handleIncrement = () => {
		setStockItems(stockItems + 1);
	};

	const handleDecrement = () => {
		if (stockItems > 0) {
			setStockItems(stockItems - 1);
		} else {
			return false;
		}
	};

	return (
		<div className="ItemCount">
			<p>
				<Icon name="slack" />
				En stock: {stock}
			</p>
			<p>Cantidad: {stockItems}</p>
			<Button secondary onClick={handleDecrement}>
				-
			</Button>
			<Button primary onClick={handleIncrement}>
				+
			</Button>
			<Button animated="vertical">
				<Button.Content
					hidden
					onClick={() => {
						onAdd(stockItems);
						setStockItems(1);
					}}
				>
					Añadir {stockItems}
				</Button.Content>
				<Button.Content visible>
					<Icon name="shop" />
				</Button.Content>
			</Button>
		</div>
	);
};

export default ItemCount;

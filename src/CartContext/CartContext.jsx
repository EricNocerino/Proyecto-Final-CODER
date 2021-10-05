import React, { useContext, useState, createContext } from "react";

export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	console.log(cart);

	const isInCart = (id) => cart.some((item) => item.id === id);

	const addToCart = (dataProduct, quantity) => {
		if (isInCart(dataProduct.id)) {
			const newCart = cart.map((cartElement) => {
				if (cartElement.id === dataProduct.id) {
					return { ...cartElement, quantity: cartElement.quantity + quantity };
				} else return cartElement;
			});
			setCart(newCart);
		} else {
			setCart((prev) => [...prev, { ...dataProduct, quantity }]);
		}
	};

	const removeItem = (itemid) => {
		setCart(cart.filter((item) => item.id !== itemid));
	};

	const clear = () => setCart([]);

	const totalItemsPrice = (dataPrice, dataQuantity) => {
		return dataPrice * dataQuantity;
	};

	const totalItemsCart = cart.reduce((acum, item) => {
		return acum + item.quantity;
	}, 0);

	const totalPrice = cart.reduce((acum, item) => {
		let itemPrice = item.price * item.quantity;
		return acum + itemPrice;
	}, 0);

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeItem,
				clear,
				totalItemsPrice,
				totalItemsCart,
				totalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

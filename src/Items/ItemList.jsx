import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "./Item";
import "./ItemList.css";

import { collection, query, getDocs } from "firebase/firestore";

//firebase
import { db } from "../Firebase";

const ItemList = () => {
	const [products, setProducts] = useState([]);
	console.log(products);

	const getProducts = async () => {
		const docs = [];
		const q = query(collection(db, "products"));

		const querySnapshot = await getDocs(q);
		querySnapshot.forEach((doc) => {
			docs.push({ ...doc.data(), id: doc.id });
		});
		setProducts(docs);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className="Item">
			{products.map((product) => {
				return (
					<Link
						className="items"
						to={`/detail/${product.id}`}
						style={{ textDecoration: "none" }}
					>
						<Item product={product} key={product.id} />
					</Link>
				);
			})}
		</div>
	);
};

export default ItemList;

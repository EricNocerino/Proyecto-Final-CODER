import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import Item from "../Items/Item";
//components
import Category from "./Category";
import { db } from "../Firebase";
import { collection, getDocs, where, query } from "firebase/firestore";
import "./CategoryListContainer.css";

const CategoryListContainer = ({ match }) => {
	const [categories, setCategories] = useState([]);
	const { id } = useParams();
	const docs = [];

	const getCategories = async () => {
		if (id) {
			const datosRef = query(
				collection(db, "products"),
				where("category", "==", id)
			);
			const datoSnapshot = await getDocs(datosRef);
			datoSnapshot.forEach((doc) => docs.push({ ...doc.data(), id: doc.id }));
			setCategories(docs);
		}
	};

	useEffect(() => {
		getCategories();
	}, [id]);

	return (
		<div className="container">
			<h2>Categorías</h2>
			<Link to={`/category/${categories.id}`}>
				<Category dato={categories.id} />
			</Link>

			<div className="Item">
				{categories.map((product) => {
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
		</div>
	);
};

export default CategoryListContainer;

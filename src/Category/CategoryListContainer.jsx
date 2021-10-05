import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//components
import Category from "./Category";
import { db } from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import "./CategoryListContainer.css";

const CategoryListContainer = ({ match }) => {
	const [categories, setCategories] = useState([]);

	const getCategories = async () => {
		const docs = [];

		const querySnapshot = await getDocs(collection(db, "products"));
		querySnapshot.forEach((doc) => {
			docs.push({ ...doc.data(), id: doc.id });
		});
		setCategories(docs);
	};

	useEffect(() => {
		getCategories();
	}, []);

	return (
		<div className="container">
			<h2>Categorías</h2>
			{categories.map((category) => {
				return (
					<Link className="link" to={`/detail/${category.id}`}>
						<Category category={category} key={category.id} />
					</Link>
				);
			})}
		</div>
	);
};

export default CategoryListContainer;

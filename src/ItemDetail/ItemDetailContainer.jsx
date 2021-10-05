import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//compoenentes
import ItemDetail from "./ItemDetail";
import { db } from "../Firebase"
import { doc, getDoc } from "firebase/firestore";
import Spinner from "../Spinner/Spinner"

const ItemDetailContainer = () => {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(false);

	const { id } = useParams();

	const getProduct = async (id) => {
		const docRef = doc(db, "products", id);
		const docSnap = await getDoc(docRef);
		let prdId = {};

		if (docSnap.exists()) {
			setIsLoading(true);
			prdId = docSnap.id;
			setData({ ...docSnap.data(), id: prdId });
		} else {
			alert("ocurrió un error");
		}
	};

	useEffect(() => {
		getProduct(id);
	}, [id]);

	return (
		<div className="ItemDetail">
			{isLoading === false ? <Spinner /> : <ItemDetail dataProduct={data} />}
		</div>
	);
};

export default ItemDetailContainer;

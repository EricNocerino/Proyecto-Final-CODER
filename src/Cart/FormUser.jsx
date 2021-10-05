import React from "react";
import "./FormUser.css";

//componentes
import { useCartContext } from "../CartContext/CartContext";
import { db } from "../Firebase"
import {
	addDoc,
	serverTimestamp,
	collection,
	query,
	orderBy,
	getDocs,
	updateDoc,
	doc,
	limit,
} from "firebase/firestore";
import { Formik, Form, Field, ErrorMessage } from "formik";
import swal from "sweetalert";

const FormBuyer = () => {
	const { cart, totalPrice } = useCartContext();

	const newOrder = async (name, phone, mail) => {
		await addDoc(collection(db, "orders"), {
			buyer: {
				name: name,
				phone: phone,
				mail: mail,
			},
			items: cart,
			date: serverTimestamp(),
			total: totalPrice,
		});
	};

	const lastOrder = async () => {
		const orders = [];
		const q = query(
			collection(db, "orders"),
			orderBy("date", "desc"),
			limit(1)
		);

		const querySnapshot = await getDocs(q);

		querySnapshot.forEach((doc) => {
			orders.push(doc.id);
		});

		return swal({
			title: "Compra Exitosa",
			text: `La compra fue realizada con exito, el id es ${orders[0]}`,
			icon: "success",
			button: "Volver",
		});
	};

	const updateItemStock = async (id, quantity) => {
		const updateStock = doc(db, "products", id);

		await updateDoc(updateStock, {
			stock: quantity,
		});
	};

	return (
		<div className="form-container">
			<Formik
				initialValues={{
					name: "",
					phone: "",
					mail: "",
				}}
				validate={(values) => {
					let err = {};

					// Validacion nombre
					if (!values.name) {
						err.name = "Por favor ingresa un nombre";
					} else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
						err.name = "El nombre solo puede contener letras y espacios";
					}

					// Validacion Telefono
					if (!values.phone) {
						err.phone = "Por favor ingresa un telefono";
					} else if (!/^\d{8,11}/.test(values.phone)) {
						err.phone = "El formato de telefono ingresado es incorrecto.";
					}

					// Validacion correo
					if (!values.mail) {
						err.mail = "Por favor ingresa un correo electronico";
					} else if (
						!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
							values.mail
						)
					) {
						err.mail =
							"El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.";
					}

					return err;
				}}
				onSubmit={(values, { resetForm }) => {
					newOrder(values.name, values.phone, values.mail);
					cart.map((prd) => {
						return updateItemStock(prd.id, prd.stock - prd.quantity);
					});
					lastOrder();
				}}
			>
				{({ errors }) => (
					<Form className="formulario">
						<div>
							<label htmlFor="name">Nombre</label>
							<Field
								type="text"
								id="name"
								name="name"
								placeholder="Ingrese su nombre completo.."
							/>
							<ErrorMessage
								name="name"
								component={() => <div className="error"> {errors.name} </div>}
							/>
						</div>
						<div>
							<label htmlFor="phone">Telefono</label>
							<Field
								type="tel"
								id="phone"
								name="phone"
								placeholder="cel 011 1111 1111"
							/>
							<ErrorMessage
								name="phone"
								component={() => <div className="error"> {errors.phone} </div>}
							/>
						</div>
						<div>
							<label htmlFor="mail">Correo</label>
							<Field
								type="email"
								id="mail"
								name="mail"
								placeholder="mail@mail.com"
							/>
							<ErrorMessage
								name="mail"
								component={() => <div className="error"> {errors.mail} </div>}
							/>
						</div>
						<button type="submit">Realizar Compra</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default FormBuyer;

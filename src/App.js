import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import { CartProvider } from "./CartContext/CartContext";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Navigation from "./Navigation/Navigation";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetail/ItemDetailContainer";
import Cart from "./Cart/Cart";
import CategoryListContainer from "./Category/CategoryListContainer";

function App() {
	return (
		<CartProvider>
			<Router>
				<div className="App">
					<Header />
					<Navigation />
					<Switch>
						<Route exact path="/" component={ItemListContainer} />
						<Route path="/category/:id" component={CategoryListContainer} />
						<Route path="/detail/:id" component={ItemDetailContainer} />
						<Route path="/cart" component={Cart} />
					</Switch>

					<Footer />
				</div>
			</Router>
		</CartProvider>
	);
}

export default App;

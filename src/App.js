import classes from './App.module.css';
import Header from './componenets/header/Header';
import { useState, useMemo } from 'react';
import Cart from './componenets/cart/Cart';
import Card from './componenets/Card/Card';
import Modal from './componenets/modal/Modal';

const PRODUCTS = [
	{
		id: 1,
		name: "Sushi",
		price: 2
	},
	{
		id: 2,
		name: "Pizza",
		price: 3.5,
	},
	{
		id: 3,
		name: "Burger",
		price: 4.3
	},
	{
		id: 4,
		name: "Barbecue",
		price: 7.5
	},
	{
		id: 5,
		name: "Chicken",
		price: 2
	},
	{
		id: 6,
		name: "Burritos",
		price: 3.5,
	},
	{
		id: 7,
		name: "Rice",
		price: 2.2
	},
	{
		id: 8,
		name: "Fish",
		price: 5.5
	},
	{
		id: 9,
		name: "Salad",
		price: 3.3
	},
]


function App() {

	const [langValue, setLangValue] = useState('ENG');
	const [products, setProducts] = useState([]);
	const [showModal, setShowModal] = useState(false);

	const total = useMemo(() => {
		let sum = 0;
		products.forEach((product) => {
			sum = sum + product.price;
		});
		return sum.toFixed(2);
	}, [products.length]);

	function changeLangHandler(e) {
		setLangValue(e.target.value)
	}

	function onAddCard(data, id) {
		let chosenProduct = data.find(product => product.id === id);
		console.log(chosenProduct);
		let nextProducts = [...products];
		nextProducts.push(chosenProduct);
		setProducts(nextProducts);
	}

	function showAddProducts() {
		if(products.length) {
			setShowModal(true)
		}
	}

	function closeModalHandler() {
		setShowModal(false);
		setProducts([]);
	}

	return (
		<>
			{showModal && <Modal onCloseModal={closeModalHandler}>
				{products.map(product => (
					<div className={classes.addedProduct}>
						<span>{product.name} </span>
						<span>{product.price} $</span>
					</div>
				))}
				<div className={classes.total}>TOTAL: {total} $</div>
			</Modal>}
			<div className={classes.container}>
				<Header onChangeLang={changeLangHandler} />
				<Cart onShowCart={showAddProducts} quantity={products.length} />
				<div className={classes.products}>
					{PRODUCTS.map(product => (
						<Card key={product.id}>
							<div>{langValue === "ENG" ? 'name:' : 'დასახელება:'} {product.name}</div>
							<div>{langValue === "ENG" ? 'Price:' : 'ფასი:'} {product.price}</div>
							<button onClick={() => onAddCard(PRODUCTS, product.id)}>{langValue === "ENG" ? 'Add to card' : 'დაამატეთ კალათაში'} </button>
						</Card>
					))}
				</div>
			</div>
		</>
	);
}

export default App;

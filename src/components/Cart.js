import '../styles/Cart.css'
import { useState } from 'react'
import { useEffect } from 'react'
function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)

	const items = Object.keys(cart)
	const total = items.reduce(
		(acc, item) => acc + cart[item].amount * cart[item].price,
		0
	)
	useEffect(() => {
		alert(`You have ${total}€ to pay 💸`)
	})

	return isOpen ? (
		<div className='jh-cart'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Close
			</button>
			{items.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{items.map((item) => (
							<li key={item}>
								{cart[item]?.amount} {item} {cart[item]?.price}€
							</li>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart({})}>Empty the cart</button>
				</div>
			) : (
				<div>Your cart is empty</div>
			)}
		</div>
	) : (
		<div className='jh-cart-closed'>
			<button
				className='jh-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Open Cart
			</button>
		</div>
	)
}

export default Cart
/*function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (<div className="jh-cart">
        <h2>Cart</h2>
        <ul>
        <li>Montsera: {monsteraPrice}€</li>
         <li>Ivy: {ivyPrice}€</li>
         <li>Flowers: {flowerPrice}€</li>
        </ul>
          Total: {monsteraPrice + ivyPrice + flowerPrice }€
          </div>)
    }
    
export default Cart */
import '../styles/Cart.css'
import { useState } from 'react'
function Cart() {
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)

    return (
        <div className='jh-cart'>
            <h2>Cart</h2>
            <div>
                Monstera: {monsteraPrice}€
                <button onClick={() => updateCart(cart + 1)}>
                    Add
                </button>
            </div>
            <h3>Total: {monsteraPrice * cart}€</h3>
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
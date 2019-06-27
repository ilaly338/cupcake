import React from 'react';
import Product from './product'

class CartPage extends React.Component {
    render(){
        let totalPrice = this.props.booksCart !== [] && this.props.booksCart.reduce((sum, current) => +sum + +current.price.split('').splice(1).join('')*current.qty,0)
        return(
            <div className='cartpage-wrapper'>
                <div className='cart-price'>total price - ${totalPrice}</div>
                <div className='product-wrapper'>
                    {this.props.booksCart !== [] && this.props.booksCart.map((item) => <Product key = {item.isbn13} count = {item.qty} item = {item} booksCart = {this.props.booksCart} />)}
                </div>
            </div>
        )
    }
}

export default CartPage;
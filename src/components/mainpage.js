import React from 'react';
import Product from './product'

class MainPage extends React.Component {
    stateUpd = () => {
        this.props.stateUpd();
    };
    render(){
        
        return(
            <div className='product-wrapper'>
                {this.props.booksArr.map((item) => <Product key = {item.isbn13} stateUpd = {this.stateUpd} count = {0} item = {item} booksCart = {this.props.booksCart} cart = {true} /> )}
            </div>
        )
    }
}

export default MainPage;
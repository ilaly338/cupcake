import React from 'react';
import InpCont from './numberInput';
import ModalPage from './modal'

class Product extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: this.props.count,
            modal: false
        };
    }; 

    onCountChanged = (count) => {
        this.setState({count});
    }

    cartAdd = () => {
        this.props.item.qty = this.state.count;
        this.state.count !== 0 && this.props.booksCart.push(this.props.item);
        this.props.stateUpd();
    }

    render(){
        const { item: { image, title, price } } = this.props;
        return(
            <div className='product-container'>
                <div className='img-wrapper' onClick = {() => this.setState({modal: true})}>
                    <img className='product-img' alt = '' src = {image}></img>
                </div>
                <div className='product-info-wrapper'>
                    <div className='product-name'>{title}</div>
                    <div className='product-price'>{price}</div>
                    <div className='cart-wrapper'>
                        <InpCont onChanged = {this.onCountChanged} value={this.state.count} />
                        <div className='cart' onClick = {this.cartAdd}>{this.props.cart && 'cart'}</div>
                        <div className='cart'>{!this.props.cart && 'del'}</div>
                    </div>
                </div>
                <div onClick = {() => this.setState({modal: false})}>
                    {this.state.modal && <ModalPage item = {this.props.item}/>}
                </div>
            </div>
        )
    }
}

export default Product;
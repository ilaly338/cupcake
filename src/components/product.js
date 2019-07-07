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
    // Добавил логику добавления в корзину
    // Проверка на повторяющиеся элементы и их последующее сложение!
    cartAdd = () => {
        if (this.state.count !==0) {
            if (this.props.booksCart.length === 0) {
                this.props.item.qty = this.state.count;
                this.props.booksCart.push(this.props.item)
            }
            else {
                let counter = 0;
                for (const p of this.props.booksCart){
                    if (p.isbn13 === this.props.item.isbn13){
                        p.qty = p.qty + this.state.count;
                        counter++;
                    }
                }
                if (counter === 0){
                    this.props.item.qty = this.state.count;
                    this.props.booksCart.push(this.props.item)
                }                
            }
        }
        this.props.stateUpd();
    }

    cartRemove = () =>{
        this.props.booksCart.map((p, index) => {
            if (p.isbn13 === this.props.item.isbn13){
                this.props.booksCart.splice(index, 1) 
            }
        })
        this.props.stateUpd();
    }

    render(){
        const { item: { image, title, price, qty } } = this.props;
        return(
            <div className='product-container'>
                <div className='img-wrapper' onClick = {() => this.setState({modal: true})}>
                    <img className='product-img' alt = '' src = {image}></img>
                </div>
                <div className='product-info-wrapper'>
                    <div className='product-name'>{title}</div>
                    <div className='product-price'>{price}</div>
                    <div className='cart-wrapper'>
                        {/* вынес логическое или за пределы div, что устранило отрисовку пустого объекта*/}
                        {/* так же за счет ИЛИ определяется когда отрисовывать del/add и значение input */}
                        {this.props.cart && <InpCont onChanged = {this.onCountChanged} value={this.state.count} />}
                        {!this.props.cart && <div>qty - {qty}</div>}
                        {this.props.cart && <div className='cart' onClick = {this.cartAdd}>cart</div>}
                        {!this.props.cart && <div className='cart' onClick = {this.cartRemove}>del</div>}
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
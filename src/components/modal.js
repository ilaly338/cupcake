import React from 'react';

class ModalPage extends React.Component {
    render(){
        const { item: { image, subtitle, title, price, url } } = this.props;
        return(
            <div className='modal'>
                <div className='modal-content'>
                    <div className = 'modal-img-wrapper' onClick = {() => this.setState({modal: true})}>
                        <img className = 'product-img' alt = '' src = {image}></img>
                    </div>
                    <div className = 'modal-product-info-wrapper'>
                        <div className = 'modal-product-name'>{title}</div>
                        <div className = 'modal-product-desc'>{subtitle}</div>
                        <div className = 'modal-product-price'>{price}</div>
                        <a href={url} target="_blank" rel="noopener noreferrer" className = 'modal-url'>{url}</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalPage;
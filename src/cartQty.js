import React from 'react';

class CartQty extends React.Component {
    render(){
        return(
            <span>
               -  {this.props.length}
            </span>
        )
    }
}

export default CartQty;
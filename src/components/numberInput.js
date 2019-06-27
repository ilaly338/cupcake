import React from 'react';

class InpCont extends React.Component {
    render(){
        let { value, onChanged } = this.props;
        return(
            <div className='cart-wrapper'>
                <div className='arrow arrow-left' onClick={() => onChanged(value>0 && --value)}>&#60;</div>
                <input className='qty-input' type='number' min='0' value={value} onChange = {(event) => console.log(event)}></input>
                <div className='arrow arrow-right' onClick={() => onChanged(++value)}>&#62;</div>
            </div>
        )
    }
}

export default InpCont;
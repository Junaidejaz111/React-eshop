import React from 'react';

import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

import {ReactComponent as CartIconSVG} from '../../assets/cart-icon.svg';

const CartIcon = ({toggleCartHidden}) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <CartIconSVG className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);
const mapDispatchToProps = dispatch =>({
    toggleCartHidden:()=> dispatch(toggleCartHidden())
});
export default connect(null,mapDispatchToProps)(CartIcon);
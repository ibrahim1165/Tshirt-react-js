import React from 'react';
import "./Cart.css"

const Cart = ({cart,handleRemoveFromCart,removeAll}) => {
let command;
 if(cart.length ===0){
    command = <p>Please Add Some one item </p>
 }else if(cart.length ===1){
     command = <p>Please Add more </p>
 }
 else{
    command = <p><small> Thanks For Adding items</small></p>
 }


    return (
        <div>
            <h3>Item Selected {cart.length}</h3>          
          {
              cart.map(tshirt=> <p>{tshirt.name}
              <button onClick={()=>handleRemoveFromCart(tshirt)}> X </button>
              </p> )
          }
          {cart.length === 0 || <p className="oreng"> YAY! You are Buying </p>}
          {cart.length==3 && <div className="oreng">
              <h3> Trigonal</h3>
              <p> tin jon ke ki gift diva</p>
              </div>}
           {command}
           {cart.length !==4 ?<p>Keep Adding</p>:<button onClick={()=>removeAll()} >Clear All</button>}
           {cart.length === 4 && <button className="oreng">Review Order </button>}
        </div>
    );
};

export default Cart;
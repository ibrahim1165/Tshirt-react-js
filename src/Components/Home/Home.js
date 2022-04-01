import React, { useState } from 'react';
import "./Home.css"
import Cart from "../Cart/Cart"
import useTshirt from '../../Hooks/useTshirt';
import Tshirt from '../Tshirt/Tshirt';

const Home = () => {
    const [tshirts,settshirts]=useTshirt();
    const [cart, setcart]= useState([]);

    const handleAddToCart =(selectedItem)=>{
        const exite =cart.find(tshirt=> tshirt._id ===selectedItem._id)
        if(!exite){
            const newCart=[...cart, selectedItem]
            setcart(newCart)
        }else{
          alert('Item Already Aded')  
        }
      
    }
    const handleRemoveFromCart =(selectedItem)=>{
        const rest =cart.filter(tshirt => tshirt._id !== selectedItem._id)
        setcart(rest)
    }
    const removeAll =()=>{
        setcart([])
    }
    return (
        <div className="home-container">
            <div className="tshirt-container">
               {
                   tshirts.map(tshirt=> <Tshirt key={tshirt._id} 
                    
                    tshirt={tshirt}
                    handleAddToCart={handleAddToCart}
                   
                   ></Tshirt>)
               }
            </div>
            <div className="cart-container">
          <Cart cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
          removeAll={removeAll}
          ></Cart>
            </div>
        </div>
    );
};

export default Home;
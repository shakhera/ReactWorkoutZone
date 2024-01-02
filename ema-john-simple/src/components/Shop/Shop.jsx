import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleToCard = (product) => {
    //if product doesn't exist in the cart, then set quantity = 1,
    // if exist, update quantity by 1.
    let newCart = [];
    const exists = cart.find((pd) => pd.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exists.quantity = exists.quantity + 1;
      const remainig = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remainig, exists];
    }
    setCart(newCart);
    addToDb(product.id);
  };
  useEffect(() => {
    const storedCart = getShoppingCart();
    const savedCart = [];
    //1 get id
    for (const id in storedCart) {
      //2 get the product by id
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        //3 get quantity of the product
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        //4 add product to save cart
        savedCart.push(addedProduct);
      }
      // console.log("added cArt", addedProduct);
    }
    //5 set the cart
    setCart(savedCart);
  }, [products]);

  return (
    <div>
      <div className="shop-container">
        <div className="product-container">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleToCard={handleToCard}
            ></Product>
          ))}
        </div>
        <div className="order-summary">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;

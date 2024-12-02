import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductItem = ({ id, image, name, price }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const product = { id, image, name, price };
    addToCart(product);
  };

  return (
    <div className="block2">
      <div className="border block2-pic hov-img0 item-center" style={{ width: "18rem" }}>
        <img
          src={image}
          alt="Product"
          style={{ width: "100%", height: '18rem' }}  // Maintain aspect ratio
        />
        <Link
          to={`/product/${id}`}
          className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
        >
          Quick View
        </Link>
      </div>

      <div className="block2-txt flex-w flex-t p-t-14">
        <div className="block2-txt-child1 flex-col-l">
          <Link
            to={`/product/${id}`}  
            className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
          >
            {name}
          </Link>
          <span className="stext-105 cl3">${price}</span>
        </div>

        <div className="block2-txt-child2 flex-r p-t-3">
          <button
            onClick={handleAddToCart}
            className="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
          >
            <img
              className="icon-heart1 dis-block trans-04"
              src="./src/assets/images/icons/icon-heart-01.png"
              alt="ICON"
            />
            <img
              className="icon-heart2 dis-block trans-04 ab-t-l"
              src="./src/assets/images/icons/icon-heart-02.png"
              alt="ICON"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

import React, { useContext } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { ShopContaxt } from "../context/ShopContext";

const Slider = () => {
  const { products } = useContext(ShopContaxt);
  
  if (!products || products.length === 0) {
    return <div>Loading products...</div>;
  }


  const sliderProducts = products.slice(0, 5);
  

  return (
    <OwlCarousel
      items={1}
      loop
      autoplay
      autoplayTimeout={5000}
      className="owl-theme"
    >
      {sliderProducts && sliderProducts.length > 0 ? (
        sliderProducts.map((product, index) => (
          <div
            key={index}
            className="item-slick1"
            style={{
              backgroundImage: `url(${product.image})`,
              backgroundSize: "contain",
              backgroundPosition: "right",
              backgroundRepeat: "no-repeat",
              height: "700px",
            }}
          >
            <div className="container h-full">
              <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                <div
                  className="layer-slick1 animated fadeInDown"
                  data-delay="0"
                >
                  <span className="ltext-101 cl2 respon2">
                    {product.category}
                  </span>
                </div>
                <div
                  className="layer-slick1 animated fadeInUp"
                  data-delay="800"
                >
                  <h2
                    className="ltext-201 cl2 p-t-19 p-b-43 respon1"
                    style={{ width: "70%" }}
                  >
                    {product.title}
                  </h2>
                </div>
                <div className="layer-slick1 animated zoomIn" data-delay="1600">
                  <a
                    href={`/product/${product.id}`}
                    className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">
          <p>No products available</p>
        </div>
      )}
    </OwlCarousel>
  );
};

export default Slider;

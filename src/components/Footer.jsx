import React from "react";

const Footer = () => {
  return (
    <footer className="bg3 p-t-75 p-b-32">
      <div className="container">
        <div className="row">
          {/* Categories Section */}
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">Categories</h4>
            <ul>
              {["Women", "Men", "Shoes", "Watches"].map((category, index) => (
                <li className="p-b-10" key={index}>
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Section */}
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">Help</h4>
            <ul>
              {["Track Order", "Returns", "Shipping", "FAQs"].map((helpItem, index) => (
                <li className="p-b-10" key={index}>
                  <a href="#" className="stext-107 cl7 hov-cl1 trans-04">
                    {helpItem}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">GET IN TOUCH</h4>
            <p className="stext-107 cl7 size-201">
              Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018
              or call us on (+1) 96 716 6879
            </p>
            <div className="p-t-27">
              {["facebook", "instagram", "pinterest-p"].map((icon, index) => (
                <a href="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16" key={index}>
                  <i className={`fa fa-${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="col-sm-6 col-lg-3 p-b-50">
            <h4 className="stext-301 cl0 p-b-30">Newsletter</h4>
            <form>
              <div className="wrap-input1 w-full p-b-4">
                <input
                  className="input1 bg-none plh1 stext-107 cl7"
                  type="text"
                  name="email"
                  placeholder="email@example.com"
                />
                <div className="focus-input1 trans-04"></div>
              </div>
              <div className="p-t-18">
                <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="p-t-40">
          <div className="flex-c-m flex-w p-b-18">
            {[1, 2, 3, 4, 5].map((icon, index) => (
              <a href="#" className="m-all-1" key={index}>
                <img src={`./src/assets/images/icons/icon-pay-0${icon}.png`} alt="ICON-PAY" />
              </a>
            ))}
          </div>

          <p className="stext-107 cl6 txt-center">
            Copyright &copy; {new Date().getFullYear()} All rights reserved | Made with{" "}
            <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
            <a href="https://colorlib.com" target="_blank" rel="noreferrer">
              Colorlib
            </a>{" "}
            &amp; distributed by{" "}
            <a href="https://themewagon.com" target="_blank" rel="noreferrer">
              ThemeWagon
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

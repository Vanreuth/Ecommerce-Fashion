import React, { useEffect, useState, useContext } from "react";
import ProductItem from "../components/ProductItem";
import { ShopContaxt } from "../context/ShopContext";

const Shop = () => {
  const { products, search, showSearch } = useContext(ShopContaxt);

  const [showFilter, setShowFilter] = useState(false);
  const [filterProduct, setFilterProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const [searchText, setSearchText] = useState("");

  // Toggle category filter
  const toggleCategory = (e) => {
    const value = e.target.value;

    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  // Apply filters and sorting
  const applyFiltersAndSort = () => {
    let productCopy = [...products];

    // Apply search filter
    if (showSearch && (search || searchText)) {
      productCopy = productCopy.filter((item) =>
        item.title?.toLowerCase().includes((search || searchText).toLowerCase())
      );
    }

    // Apply category filter
    if (category.length > 0) {
      productCopy = productCopy.filter((item) => category.includes(item.category));
    }

    // Apply sorting
    if (sortType === "low-high") {
      productCopy.sort((a, b) => a.price - b.price);
    } else if (sortType === "high-low") {
      productCopy.sort((a, b) => b.price - a.price);
    }

    setFilterProduct(productCopy);
  };
  

  // Initial load of products
  useEffect(() => {
    setFilterProduct(products);
  }, [products]);

  useEffect(() => {
    applyFiltersAndSort();
  }, [category, search, showSearch, sortType, searchText]);

  return (
    <div>
      <section className="bg0 p-t-30">
        <div className="container">
          <div className="p-b-10">
            <h3 className="ltext-103 cl5">Product Overview</h3>
          </div>
          <div className="flex-w flex-sb-m p-b-52">
            {/* Filter Buttons */}
            <div className="flex-w flex-l-m filter-tope-group m-tb-10">
              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  category.length === 0 ? "how-active1" : ""
                }`}
                onClick={() => setCategory([])}
              >
                All Products
              </button>
              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  category.includes("women's clothing") ? "how-active1" : ""
                }`}
                value="women's clothing"
                onClick={toggleCategory}
              >
                Women
              </button>
              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  category.includes("men's clothing") ? "how-active1" : ""
                }`}
                value="men's clothing"
                onClick={toggleCategory}
              >
                Men
              </button>
              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  category.includes("electronics") ? "how-active1" : ""
                }`}
                value="electronics"
                onClick={toggleCategory}
              >
               Electronics
              </button>
              
              <button
                className={`stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 ${
                  category.includes("jewelery") ? "how-active1" : ""
                }`}
                value="jewelery"
                onClick={toggleCategory}
              >
                Jewelery
              </button>
            </div>

            {/* Filter and Search Toggles */}
            <div className="flex-w flex-c-m m-tb-10">
              <select onChange={(e)=>setSortType(e.target.value)} className='border border-secondary" text-sm flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4'>
             <option value="relavent" className=" d-flex"> Sort by: Relavent
              </option>
             <option value="low-high">Sort by: Low to High</option>
             <option value="high-low">Sort by: High to Low</option>
          </select>
            </div>

            {/* Search Product */}
            {/* <div className="dis-flex panel-search w-full p-t-10 p-b-15">
              <div className="bor8 dis-flex p-l-15">
                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <i className="zmdi zmdi-search"></i>
                </button>
                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  value={searchText}
                  onChange={handleSearchChange}
                  placeholder="Search"
                />
              </div>
            </div> */}
          </div>

          {/* Product Listing */}
          <div className="row isotope-grid">
            {filterProduct.map((item, index) => (
              <div
                key={index}
                className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item"
              >
                <ProductItem
                  name={item.title}
                  id={item.id}
                  price={item.price}
                  image={item.image}
                />
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="flex-c-m flex-w w-full p-t-45">
            <a
              href="#"
              className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
            >
              Load More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;

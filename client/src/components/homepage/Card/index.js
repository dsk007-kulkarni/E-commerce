import React from "react";
import { Container, fade, InputBase, makeStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Header from "../../header.js";
import Card from "./card.js";
import prod1 from "../../img/product-img/product-1.jpg";
import Info from "./infoforcard.js";

const createCard = (info) => {
  return (
    <>
      <Card img={info.img} price={info.price} description={info.description} />
    </>
  );
};

export default function HomePage() {
  return (
    <>
      <Header />

      <div>
        <div id="wrapper">
          {/* ****** Header Area Start ****** */}
          {/* ****** Header Area End ****** */}
          <section className="top-discount-area d-md-flex align-items-center">
            {/* Single Discount Area */}
            <div className="single-discount-area">
              <h5>Free Shipping &amp; Returns</h5>
              <h6>
                <a href="#">BUY NOW</a>
              </h6>
            </div>
            {/* Single Discount Area */}
            <div className="single-discount-area">
              <h5>20% Discount for all dresses</h5>
              <h6>USE CODE: Colorlib</h6>
            </div>
            {/* Single Discount Area */}
            <div className="single-discount-area">
              <h5>20% Discount for students</h5>
              <h6>USE CODE: Colorlib</h6>
            </div>
          </section>

          <section className="shop_grid_area section_padding_100">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="shop_sidebar_area">
                    <div className="widget size mb-50">
                      <h6 className="widget-title mb-30">Filter by Size</h6>
                      <div className="widget-desc">
                        <ul className="d-flex justify-content-between">
                          <li>
                            <a href="#">XS</a>
                          </li>
                          <li>
                            <a href="#">S</a>
                          </li>
                          <li>
                            <a href="#">M</a>
                          </li>
                          <li>
                            <a href="#">L</a>
                          </li>
                          <li>
                            <a href="#">XL</a>
                          </li>
                          <li>
                            <a href="#">XXL</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-8 col-lg-9">
                  <div className="shop_grid_product_area">
                    <div className="row">
                      {/* Single gallery Item */}
                      {Info.map(createCard)}
                    </div>
                  </div>
                  <div
                    className="shop_pagination_area wow fadeInUp"
                    data-wow-delay="1.1s"
                  >
                    <nav aria-label="Page navigation">
                      <ul className="pagination pagination-sm">
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            01
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            02
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            03
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
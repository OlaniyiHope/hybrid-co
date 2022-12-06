import React, { Component } from "react";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import Page_header from "../../component/global-component/page-header";
import Footer from "../../component/global-component/footer";
import Navbar from "../../component/global-component/navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Property = () => {
  const { data, loading, error } = useFetch("/properties?featured=true");
  const handleSearch = () => {};

  return (
    <>
      <div className="property-area pd-top-100">
        <Navbar />
        <Page_header headertitle="Property" />
        <div className="container">
          <div className="row custom-gutter">
            <div className="col-lg-12">
              <div className="property-filter-menu-wrap">
                <div className="property-filter-menu portfolio-filter text-center">
                  <button
                    data-filter="*"
                    className="active"
                    style={{ marginTop: 20 }}
                  >
                    Other Properties
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*Property filter Start*/}
          <div className="property-filter-area row custom-gutter">
            <div className="gallery-sizer col-1" />
            {/*property item Start*/}
            {loading ? (
              "Loading"
            ) : (
              <>
                {data &&
                  data.map((item) => (
                    <div
                      key={item?._id}
                      className="rld-filter-item  col-lg-3 col-sm-6 "
                    >
                      <div className="single-feature">
                        <div className="thumb">
                          <img
                            src={item?.photos[0]}
                            alt="img"
                            className="thumb"
                          />
                        </div>
                        <div className="details">
                          <p className="author">
                            <FontAwesomeIcon icon={faLocationDot} />
                            {item?.city}
                          </p>
                          <h6 className="title readeal-top">
                            <Link to="">{item?.name}</Link>
                          </h6>
                          <h6 className="price">
                            Price: ₦{item?.cheapestPrice}
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Property;

import useFetch from "../../hooks/useFetch";
import "./featured.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import sectiondata from "../../data/sections.json";
import parse from "html-react-parser";

const Featured = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }} className="bet">
        Beautiful places in Lagos
      </h1>
      <div className="featured">
        <>
          <div className="featuredItem">
            <img className="featuredImg " />
            <div className="featuredTitles">
              <h1>Banana Island</h1>
              <h2> properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img className="featuredImg2" />
            <div className="featuredTitles">
              <h1>Lekki</h1>
              <h2>properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img className="featuredImg3" />
            <div className="featuredTitles">
              <h1>Victoria Island</h1>
              <h2> properties</h2>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default Featured;

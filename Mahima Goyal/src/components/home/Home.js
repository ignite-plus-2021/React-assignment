import React from "react";
import Body from "../body/Body";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import "./Home.css";

function Home() {
  return (
    <div>
      <div className="home">
        <div>
          <Header />
        </div>
        <div>
          <Body />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;

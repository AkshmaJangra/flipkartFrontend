import React from "react";
import slide1 from "../assets/firstSlide.webp";
import slide2 from "../assets/secondSlide.webp";
import slide3 from "../assets/3rdSlide.webp";
import slide4 from "../assets/4thSlide.webp";
import slide5 from "../assets/5thSlide.webp";
import "../styles/SlidesContainer.css";
export default function SlidesContainer() {
  return (
	<div className="container-fluid">
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={slide1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slide2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slide3} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slide4} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={slide5} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" style={{position:'relative',right:'4.5rem'}} />
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" style={{position:'relative',left:'4.5rem'}}/>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
	</div>
  );
}

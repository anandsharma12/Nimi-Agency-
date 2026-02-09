import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { products } from "../../data/products.js";
import "./ProductsDetails.css";
import facebook from "../../assets/images/facebook.png";
import twitter from "../../assets/images/twitter.webp";
import pin from "../../assets/images/pin.webp";
import BottomNav from "../BottomNav/BottomNav";

const CourseDetail = () => {
  const { id } = useParams();
  const [activeIndex, setActiveIndex] = useState(0);
  const [favorite, setFavorite] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const [addedToBag, setAddedToBag] = useState(false);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const swipeDistance = touchStartX - touchEndX;

    if (swipeDistance > 50) {
      nextSlide();
    } else if (swipeDistance < -50) {
      prevSlide();
    }

    setTouchStartX(0);
    setTouchEndX(0);
  };

  const navigate = useNavigate();

  const currentIndex = products.findIndex((course) => course.id === Number(id));

  const goPrevCourse = () => {
    if (currentIndex > 0) {
      navigate(`/products/${products[currentIndex - 1].id}`);
    }
  };

  const goNextCourse = () => {
    if (currentIndex < products.length - 1) {
      navigate(`/products/${products[currentIndex + 1].id}`);
    }
  };

  const course = products.find((course) => course.id === Number(id));

  if (!course) return <p>Course not found</p>;

  const images = [course.image, course.image, course.image];

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="course-detail-page">
      <div className="course-detail-header">
        <p className="course-detail-breadcrumb">
          <span className="crumb">Home</span> /{" "}
          <span className="crumb">Store</span> /{" "}
          <span className="crumb active">Course</span>
        </p>

        <div className="course-nav">
          <div className="course-nav-box">
            <button
              className="course-nav-btn"
              onClick={goPrevCourse}
              disabled={currentIndex === 0}
            >
              ‹
            </button>

            <button
              className="course-nav-btn"
              onClick={goNextCourse}
              disabled={currentIndex === products.length - 1}
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div className="course-detail-wrapper">
        {/* ================= LEFT : CAROUSEL ================= */}
        <div
          className="course-detail-image "
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button className="carousel-arrow left" onClick={prevSlide}>
            ‹
          </button>

          <button className="carousel-arrow right" onClick={nextSlide}>
            ›
          </button>

          <div
            className="carousel-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {images.map((img, i) => (
              <img key={i} src={img} alt={course.title} />
            ))}
          </div>

          {/* dots – mobile only */}
          <div className="carousel-dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* ================= RIGHT : CONTENT ================= */}
        <div className="course-detail-info">
          <h1>
            {course.title} <span>{course.subtitle}</span>
          </h1>

          <h2>${course.price}.00</h2>
          <p className="bag-text">1 item in the bag</p>

          {/* ACTION BUTTONS */}
          <div className="action-buttons">
            {!addedToBag ? (
              <button
                className="btn-dark"
                disabled={course.soldOut}
                onClick={() => setAddedToBag(true)}
              >
                {course.soldOut ? "Sold Out" : "Add to Bag"}
              </button>
            ) : (
              <>
                <button className="btn-outline">Add More</button>
                <button className="btn-dark" onClick={() => navigate("/cart")}>
                  Go to Checkout
                </button>
              </>
            )}
          </div>

          {/* PRODUCT DETAILS */}
          <div className="product-details">
            <h4>Product Details</h4>
            <p>{course.productDetails}</p>
          </div>

          {/* SAVE FOR LATER */}
          <div className="save-later">
            <span>Save this product for later</span>
            <button
              className={`favorite-btn ${favorite ? "active" : ""}`}
              onClick={() => setFavorite(!favorite)}
            >
              <span className="heart">{favorite ? "♥" : "♡"}</span>
              Favorite
            </button>
          </div>

          {/* SHARE */}
          <div className="share-section">
            <p>Share this product with your friends</p>

            <div className="share-icons">
              <a className="icon">
                <span className="fb-icon-box icon-box">
                  <img src={facebook} alt="Facebook" />
                </span>
                <span className="icon-text">Share</span>
              </a>

              <a className="icon">
                <span className="twitter-icon-box icon-box">
                  <img src={twitter} alt="Twitter" />
                </span>
                <span className="icon-text">Share</span>
              </a>

              <a className="icon">
                <span className="pin-icon-box icon-box">
                  <img src={pin} alt="Pinterest" />
                </span>
                <span className="icon-text">Pin it</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* SUB IMAGES – DESKTOP ONLY */}
      <div className="course-detail-subimage">
        <img src={course.image} alt={course.title} />
        <img src={course.image} alt={course.title} />
      </div>

      <BottomNav />
    </section>
  );
};

export default CourseDetail;

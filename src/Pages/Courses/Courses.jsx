import { useState } from "react";
import { courses } from "../../data/courses";
import SortDropdown from "../../Components/SortDropdown/SortDropdown";
import StoreItemCard from "../../Components/StoreItemCard/StoreItemCard";
import BottomNav from "../../Components/BottomNav/BottomNav";
import "./Courses.css";

const Courses = () => {
  const [sortOpen, setSortOpen] = useState(false);
  const [sortType, setSortType] = useState("recommend");

  const sortedCourses = [...courses].sort((a, b) => {
    switch (sortType) {
      case "priceLow":
        return a.price - b.price;
      case "priceHigh":
        return b.price - a.price;
      case "nameAZ":
        return a.title.localeCompare(b.title);
      case "nameZA":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  return (
    <section className="courses-page">
      {/* HEADER */}
      <div className="page-header">
        <h2>Course</h2>
        <p className="course-breadcrumb">Home / Store / Course</p>

        <div className="sort-wrapper">
          <button className="sort-btn" onClick={() => setSortOpen((p) => !p)}>
            SORT BY ▾
          </button>

          {sortOpen && (
            <SortDropdown
              sortType={sortType}
              setSortType={setSortType}
              close={() => setSortOpen(false)}
            />
          )}
        </div>
      </div>

      {/* GRID */}
      <div className="courses-grid">
        {sortedCourses.map((course) => (
          <StoreItemCard key={course.id} product={course} isCourse = {true}/>
        ))}
      </div>

      <BottomNav />
    </section>
  );
};

export default Courses;

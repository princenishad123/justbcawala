import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import CourseCard from "../Components/CourseCard";
import { services } from "smart-database";
import Loader from "../Components/Loader/Loader";
const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    (() => {
      services
        .getAllDocs("courses")
        .then((res) => {
          setAllCourses(res);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);
  return (
    <Layout>
      {allCourses.length > 0 ? "" : <Loader />}
      <div className="flex flex-wrap max-sm:justify-center gap-4">
        {allCourses.map((e) => (
          <CourseCard
            key={e.id}
            id={e.id}
            thumbnail={e.imageUrl}
            title={e.title}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Courses;

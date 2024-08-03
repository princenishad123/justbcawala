import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import CourseCard from "../Components/CourseCard";
import { services } from "smart-database";
import Loader from "../Components/Loader/Loader";
const Courses = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    (() => {
      services
        .getAllDocs("courses")
        .then((res) => {
          setAllCourses(res);
          setIsLoader(true);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);

  return (
    <Layout>
      {isLoader ? "" : <Loader />}
      <div className="flex flex-wrap max-sm:justify-center gap-4">
        {allCourses.length <= 0 ? (
          <div className="w-full h-[82vh] grid place-content-center text-center text-xl">
            No Courses
          </div>
        ) : (
          allCourses.map((e) => (
            <CourseCard
              key={e.id}
              id={e.id}
              thumbnail={e.imageUrl}
              title={e.title}
            />
          ))
        )}
      </div>
    </Layout>
  );
};

export default Courses;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseRead from "./pages/CourseRead";
import UploadCourse from "./pages/UploadCourse";
import AddMoreChapter from "./pages/AddMoreChapter";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/course/:id" element={<CourseRead />} />
      <Route path="/create-course" element={<UploadCourse />} />
      <Route path="/add-more-chapter/:id" element={<AddMoreChapter />} />
    </Routes>
  );
};

export default App;

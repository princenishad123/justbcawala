import React, { useState } from "react";
import Layout from "../Layout/Layout";
import { services } from "smart-database";
import toast from "react-hot-toast";
// import { services } from "smart-database";
import { nanoid } from "nanoid";

const UploadCourse = () => {
  const [button, setButton] = useState("Create Course");
  const handleForm = (e) => {
    e.preventDefault();
    let id = nanoid(15);
    setButton("Creating...");
    let formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    let data = {
      ...obj,
      chapter: [],
    };
    services
      .uploadDoc("courses", id, data)
      .then((res) => {
        setButton("Create Course");

        toast.success("courses created");
      })
      .catch((err) => {
        toast.error(err);
      });
  };
  return (
    <Layout>
      <div className="max-w-96 h-auto mx-auto border border-slate-300 p-4 rounded-lg dark:border-slate-500">
        <h1 className="text-xl font-semibold">Create Course</h1>
        <form className="my-8" onSubmit={handleForm}>
          <div className="my-2">
            <label htmlFor="course">Course Name</label> <br />
            <input
              className="outline-none border w-full py-1 px-2 bg-slate-100 dark:border-slate-400 dark:bg-slate-700"
              type="text"
              name="course_name"
              id="course"
            />
          </div>
          <div className="my-2">
            <label htmlFor="title">Title</label> <br />
            <input
              className="outline-none border w-full py-1 px-2 bg-slate-100 dark:border-slate-400 dark:bg-slate-700"
              type="text"
              name="title"
              id="title"
            />
          </div>
          <div className="my-2">
            <label htmlFor="imageUrl">Image Url</label> <br />
            <input
              className="outline-none border w-full py-1 px-2 bg-slate-100 dark:border-slate-400 dark:bg-slate-700"
              type="text"
              name="imageUrl"
              id="imageUrl"
            />
          </div>
          <div className="my-2">
            <label htmlFor="description">Description</label> <br />
            <textarea
              className="outline-none border h-44 w-full py-1 px-2 bg-slate-100 dark:border-slate-400 dark:bg-slate-700"
              name="description"
              id="description"
            ></textarea>
          </div>
          <button className="text-center py-1 px-2 bg-blue-500 text-white">
            {button}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default UploadCourse;

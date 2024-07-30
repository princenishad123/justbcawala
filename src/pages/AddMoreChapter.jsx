import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import { services } from "smart-database";
import toast from "react-hot-toast";

const AddMoreChapter = () => {
  const { id } = useParams();
  const [button, setButton] = useState("Add chapter");

  const [content, setContent] = useState([]);
  const [lession, setLession] = useState({
    lession: "",
    description: "",
    syntax: "",
  });

  useEffect(() => {
    services
      .getOneDoc("courses", id) // required 2 parameter : collection name, id
      .then((res) => {
        setContent(res.chapter);
      })
      .catch((err) => {
        console.log(err.code);
      });
  }, []);

  const addChapter = (e) => {
    e.preventDefault();
    setButton("Adding...");
    content.push(lession);

    services
      .updateDoc("courses", id, { chapter: content }) //whatever you want to change
      .then((res) => {
        toast.success("Chapter added");
        setButton("Add Chapter");
        setLession({
          lession: "",
          description: "",
          syntax: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      <div className="max-w-[580px] mx-auto h-auto p-3">
        <h1 className="text-xl font-semibold">Add more chapters</h1>
        <form onSubmit={addChapter} className="py-2 my-3">
          <div>
            <label htmlFor="chapter">Chapter Name</label> <br />
            <input
              onChange={(e) =>
                setLession({ ...lession, lession: e.target.value })
              }
              value={lession.lession}
              type="text"
              name="chapter"
              id="chapter"
              className="outline-none w-full border bg-slate-100 py-1 px-2 border-slate-300 dark:border-slate-700 dark:bg-slate-600 rounded"
            />
          </div>
          <div className="my-2">
            <label htmlFor="description">Description</label> <br />
            <textarea
              onChange={(e) =>
                setLession({ ...lession, description: e.target.value })
              }
              value={lession.description}
              className="outline-none border h-28 w-full py-1 px-2 bg-slate-100 dark:border-slate-400 dark:bg-slate-700"
              name="description"
              id="description"
            ></textarea>
          </div>
          <div className="my-2">
            <label htmlFor="syntax">Syntax</label> <br />
            <textarea
              className="outline-none border h-44 w-full py-1 px-2 bg-slate-100 dark:border-slate-400 dark:bg-slate-700"
              name="syntax"
              id="syntax"
              onChange={(e) =>
                setLession({ ...lession, syntax: e.target.value })
              }
              value={lession.syntax}
            ></textarea>
          </div>
          <button className="text-center py-1 px-2 bg-blue-500 text-white">
            Add Chapter
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default AddMoreChapter;

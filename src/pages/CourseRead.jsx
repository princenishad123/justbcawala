import React, { useRef, useState, memo, useEffect } from "react";
import Layout from "../Layout/Layout";
import { useParams } from "react-router-dom";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { RiArrowRightWideLine } from "react-icons/ri";
import { services } from "smart-database";
import Loader from "../Components/Loader/Loader";
const CourseRead = () => {
  const { id } = useParams();
  const sidebarRef = useRef();
  const [topicSidebar, setTopicSidebar] = useState(true);
  const [chapters, setChapters] = useState([]);
  const [indexNumber, setIndexNumber] = useState(0);

  const handleTopicSidebar = () => {
    if (topicSidebar) {
      sidebarRef.current.style.width = "0px";
      setTopicSidebar(false);
    } else {
      sidebarRef.current.style.width = "300px";
      sidebarRef.current.addClass = "sidebarTopics";
      setTopicSidebar(true);
    }
  };
  useEffect(() => {
    services
      .getOneDoc("courses", id) // required 2 parameter : collection name, id
      .then((res) => {
        setChapters(res.chapter);
      })
      .catch((err) => {
        console.log(err.code);
      });
  }, []);

  return (
    <Layout>
      {chapters.length > 0 ? "" : <Loader />}

      <div className="flex gap-4">
        {/* code topics here.... */}
        <div
          ref={sidebarRef}
          className="courseTopics max-md:fixed md:relative bg-white dark:bg-slate-900 left-0 max-md:top-12 top-0  w-[300px]  border-r border-l border-b border-t border-slate-200 dark:border-slate-600 "
        >
          <button
            onClick={handleTopicSidebar}
            className="w-8 z-10 rounded-full absolute right-[-18px] top-[50%] h-8 bg-slate-200 dark:bg-slate-600 grid place-content-center"
          >
            <RiArrowRightWideLine />
          </button>
          <div className={`${topicSidebar ? "" : "hidden"}`}>
            <h3 className="font-semibold py-2 px-2 border-slate-200 dark:border-slate-600 border-b">
              Course Topics
            </h3>
            <ul className="px-1">
              {chapters.map((e, index) => {
                return (
                  <li
                    key={index}
                    // onClick={() => handleChapter(index)}
                    onClick={() => setIndexNumber(index)}
                    className="py-1 px-1 rounded-md bg-slate-200 dark:bg-slate-600 my-1 cursor-pointer"
                  >
                    {e.lession}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="w-full">
          <div>
            <h2 className="text-xl font-semibold my-2">topics name</h2>
            <p>{chapters[indexNumber]?.description}</p>
          </div>
          <div className="px-2 py-4">
            <h1 className="text-xl font-semibold">Example :</h1>
            <SyntaxHighlighter language="javascript" style={dark}>
              {chapters[indexNumber]?.syntax}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default memo(CourseRead);

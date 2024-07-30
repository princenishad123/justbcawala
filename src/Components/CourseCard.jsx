import React from "react";
import { useNavigate } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { services } from "smart-database";
import toast from "react-hot-toast";

const CourseCard = ({ thumbnail, title, id }) => {
  const navigate = useNavigate();

  const handleDelete = (courseId) => {
    console.log(courseId);
    services
      .deleteDoc("courses", courseId) //required  parameter : CollectionName, id
      .then((res) => {
        toast.success("Course deleted!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="max-w-80 min-h-48 border border-slate-300 overflow-hidden transition hover:scale-[1.02] rounded-md dark:border-slate-700 ">
      <div
        onClick={() => navigate(`/course/${id}`)}
        className="w-full cursor-pointer max-h-48 overflow-hidden"
      >
        <img className="w-full h-48" src={thumbnail} alt="" />
      </div>
      <div className="w-full h-auto flex justify-between items-center px-2 py-1">
        <h2 className="thumnailsTitle text-md font-semibold ">{title}</h2>
      </div>
      <div className="flex items-center py-1 justify-between px-3">
        <div className="w-8 h-8 border rounded-full overflow-hidden"></div>
        <div className="text-gray-400">
          <button
            onClick={() => navigate(`/add-more-chapter/${id}`)}
            title="Add more chapters"
            className="text-2xl"
          >
            <IoAddCircleOutline />
          </button>
          <button
            onClick={() => handleDelete(id)}
            title="Delete Course"
            className="text-2xl"
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

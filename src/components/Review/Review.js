import React from "react";

const Review = ({ name, image, rating, review, i }) => {
  return (
    <div
      className={`bg-slate-700 shadow border rounded p-1 border-slate-400 relative flex items-center ${
        i % 2 === 0 ? "flex-row-reverse " : "flex-row"
      }`}
    >
      <img src={image} className={`max-w-[200px] h-auto rounded`} alt={name} />
      <div className={`pl-6 pr-3 py-4`}>
        <h4 className="text-xl mb-4">{name}</h4>
        <blockquote className="text-lg text-slate-400 font-serif italic relative">
          <span className="text-4xl text-slate-blue-500 absolute left-0">
            &ldquo;
          </span>
          <span className="pl-4"> {review}</span>
          <span className="text-4xl text-slate-blue-500 absolute left-auto">
            &rdquo;
          </span>
        </blockquote>
        <p className="italic mt-4">___ {rating} out of 5.0</p>
      </div>
    </div>
  );
};

export default Review;

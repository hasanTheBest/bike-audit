import React from "react";
import bike1 from "../../images/bike-2.jpg";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* hero */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-2/4">
          <img
            className="max-w-full h-auto rounded-lg shadow"
            src={bike1}
            alt="Yamaha R15 v4"
          />
        </div>

        {/* hero content */}
        <div className="md:w-2/4 p-6 md:p-8">
          <h1 className="text-4xl text-slate-400 font-bold mb-6 leading-tight">
            Yamaha <span className="text-sky-600">R15 V4</span> <br />
            <span className="text-sky-600">Racing</span> perfection
          </h1>

          <p className="text-lg leading-normal text-slate-400 mb-8">
            The all new R15 V4 is the 4th generation of legendry R15 which
            shares the same DNA with super sports YZF R1. R15 V4 comes with 155
            CC LC4V SOHC FI ENGINE WITH VVA equipped with a Traction Control
            System and a Quick Shifter.
          </p>

          <button className="font-semibold uppercase border px-6 border-slate-400 p-3 bg-slate-800 text-slate-400 rounded shadow tracking-wider transition-all hover:text-slate-300 hover:bg-slate-700">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

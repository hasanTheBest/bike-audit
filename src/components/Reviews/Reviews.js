import React from "react";
import { useNavigate } from "react-router-dom";
import { useReviews } from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = ({ home }) => {
  const [reviews, setReviews] = useReviews();
  const navigateTo = useNavigate();

  return (
    <>
      <div className="grid grid-cols-1 max-w-4xl mx-auto gap-8 lg:grid-cols-2">
        <h2 className="text-3xl py-3 col-span-full text-center">
          Rider Reviews
        </h2>

        {!home
          ? reviews.map((review, i) => (
              <Review key={review.id} {...review} i={i} />
            ))
          : reviews
              .splice(0, 3)
              .map((review, i) => <Review key={review.id} {...review} i={i} />)}
      </div>

      {home && (
        <div className="d-flex my-6 py-6 w-full text-center">
          <button
            className="py-3 px-6 rounded border bg-slate-700"
            onClick={() => navigateTo("/reviews")}
          >
            See All Reviews
          </button>
        </div>
      )}
    </>
  );
};

export default Reviews;

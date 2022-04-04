import { useEffect, useState } from "react";

function useReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return [reviews, setReviews];
}

export { useReviews };

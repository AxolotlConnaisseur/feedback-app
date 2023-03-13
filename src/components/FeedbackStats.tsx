import React from "react";
import "./style/FeedbackStats.css";

function FeedbackStats(props: any) {
  return (
    <span className="feedbackStats">
      <div className="reviewCount">
        <label htmlFor="reviewCount">{props.ratingCount} Reviews</label>
      </div>
      <div className="avgRating">
        <label htmlFor="avgRating">Average Rating: {props.ratingAvg}</label>
      </div>
    </span>
  );
}

export default FeedbackStats;

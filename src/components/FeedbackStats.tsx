import React from "react";
import "./FeedbackStats.css";

var RatingCount: string = "4";
var RatingAvg: string = "4";

class Stat {
  count: number = 0;
  avg: number = 0;

  constructor(count: number, avg: number) {
    this.count = count;
    this.avg = avg;
    RatingCount = RatingCount + 1;
    RatingAvg = RatingAvg + 1;
  }
  stat: Stat = new Stat(0, 0);
}

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

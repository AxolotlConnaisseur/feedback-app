import React from "react";
import FeedbackItem from "./FeedbackItem";

class DataItem {
  rating: string = "";
  comment: string = "";
  key: number = 0;

  constructor(r: string, c: string) {
    this.rating = r;
    this.comment = c;
    this.key= this.key + 1;
  }
  getData() {}
}
export default DataItem;

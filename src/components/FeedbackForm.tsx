import React, { use, useState } from "react";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import "./FeedbackForm.css";
import FeedbackItem from "./FeedbackItem";
import FeedbackStats from "./FeedbackStats";
import DataItem from "./FeedbackData";
import FeedbackList from "./FeedbackList";
// import Buttons from "./Buttons";
import buttons from "./Button";
import itemsEx from "./items";
import { render } from "@testing-library/react";

var comment: any = "";
var rating: any = "9";
class Form {
  fillItems() {}
}
function getInput() {
  rating = 4;
}
const feedbackItem = () => {
  return FeedbackItem;
};

export function FeedbackForm(props) {
  // var ratingCount: number = 1;
  // var ratingAvg: number = 0;
  // var ratingTotal: number = 10;
  // function deleteItem(id: any) {
  //   setItems((prev) => {
  //     return prev.filter((item, index) => {
  //       return index !== id;
  //     });
  //   });
  // }
  function Buttons() {
    return (
      <ul className="btn-group">
        {buttons.map(function (button) {
          return (
            <li>
              <div>
                <button
                  className="btn send"
                  onClick={() => {
                    // setRating()
                  }}
                >
                  <input
                    className="btn-check"
                    type="radio"
                    name="flexRadioDefault"
                  ></input>
                  <label className="form-check-label" htmlFor="btn-check">
                    {button}
                  </label>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
  var [items, setItems] = useState<any[]>([
    <FeedbackItem rating={5} comment={"lol"} key={0}></FeedbackItem>,
  ]);
  var [rating, setRating] = useState<any>(4);
  var [comment, setComment] = useState<any>("");
  var [ratingCount, setRatingCount] = useState<any>(0);
  var [ratingAvg, setRatingAvg] = useState<any>(0);
  var [ratingTotal, setRatingTotal] = useState<any>(0);

  function handleComment(event) {
    setComment(event.target.value);
    // setComment("Hullu");
  }
  function getRatingCount() {
    setRatingCount(items.length + 1);
  }
  function calculateAvg() {
    setRatingAvg(ratingTotal / ratingCount);
  }
  function getRatingTotal() {
    let count = 0;
    items.forEach(function (item) {
      count += item.rating;
    });
    setRatingTotal(count);
  }
  const addItem = () => {
    setRating(2);
    setItems(
      items.concat(
        <FeedbackItem
          rating={6}
          comment={"lol"}
          key={items.length + 1}
        ></FeedbackItem>
      )
    );
    items.forEach(function (item) {
      console.log(item);
    });
    var demo = document.getElementById("feedbackList");
    console.log("\n\n");
    // ReactDOM.render(<FeedbackListe></FeedbackListe>, demo);
  };
  const FeedbackListe = () => {
    return (
      <tr className="feedbackList">
        <td>
          {items.map(function (item, index) {
            return (
              <div>
                <FeedbackItem
                  key={index}
                  rating={rating}
                  comment={comment}
                ></FeedbackItem>
              </div>
            );
          })}
        </td>
      </tr>
    );
  };

  return (
    <div className="body">
      <h1>Feedback UI</h1>
      <div className="wrapper">
        <table>
          <thead>
            <tr className="firstRow">
              <td>
                <div className="card feedbackForm">
                  How would you rate us?
                  <div className="btn-group" role="group">
                    <Buttons></Buttons>
                  </div>
                  <div className="input-group input-group-sm mb-3 review">
                    <input
                      onInput={handleComment}
                      type="text"
                      className="form-control"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                    ></input>
                    <div className="input-group-append">
                      <button
                        className="btn send-btn"
                        onClick={() => {
                          addItem();
                          calculateAvg();
                          getRatingCount();
                          getRatingTotal();
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="secondRow">
              <td>
                <div className="feedbackStats">
                  <FeedbackStats
                    ratingCount={ratingCount}
                    ratingAvg={ratingAvg}
                  ></FeedbackStats>
                </div>
              </td>
            </tr>
          </thead>
          <tbody>
            <FeedbackListe></FeedbackListe>
          </tbody>
        </table>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./style/FeedbackForm.css";
import FeedbackItem from "./FeedbackItem";
import FeedbackStats from "./FeedbackStats";
import buttons from "./Button";
import itemsEx from "./items";

export function FeedbackForm(props) {
  var [items, setItems] = useState(itemsEx);
  var getInitialTotal = () => {
    let count: number = 0;
    items.forEach(function (item) {
      count = count + item.rating;
    });
    return count;
  };
  var initialTotal: number = getInitialTotal();

  var getInitialAvg = () => {
    var result: number = Math.round((initialTotal / items.length) * 10) / 10;
    return result;
  };
  var initialAvg: number = getInitialAvg();
  var [rating, setRating] = useState<any>(1);
  var [comment, setComment] = useState<any>("(Keine Angabe)");
  var [ratingCount, setRatingCount] = useState<number>(items.length);
  var [ratingTotal, setRatingTotal] = useState<number>(0);
  var [ratingAvg, setRatingAvg] = useState<number>(initialAvg);
  ratingCount = items.length+1;
  function Buttons() {
    return (
      <ul className="btn-group">
        {buttons.map(function (button, index) {
          return (
            <li key={index}>
              <button
                className="btn choice"
                onClick={() => {
                  setRating(button.valueOf());
                }}
              >
                <input
                  className="btn-check"
                  type="button"
                  name="flexRadioDefault"
                ></input>
                <label className="form-check-label" htmlFor="btn-check">
                  {button}
                </label>
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  function deleteItem(id) {
    setItems(
      items.filter(function (item) {
        return item.id !== id;
      })
    );
    setRatingCount(ratingCount - 1);
    getRatingTotal();
    calculateAvg();
  }

  function handleComment(event) {
    setComment(event.target.value);
  }
  function getRatingCount() {
    setRatingCount(items.length + 1);
  }
  function calculateAvg() {
    setRatingAvg(Math.round((ratingTotal / ratingCount) * 10) / 10);
  }
  function getRatingTotal() {
    let count = 0;
    items.forEach(function (item) {
      count = count + item.rating;
    });
    setRatingTotal(count);
  }
  const addItem = (rating, comment) => {
    const newItem = {
      id: items.length,
      rating: rating,
      comment: comment,
    };
    setItems([...items, newItem]);
  };
  const FeedbackListe = () => {
    return (
      <tbody className="feedbackList">
        {items.map(function (item, index) {
          return (
            <FeedbackItem
              key={index}
              id={item.id}
              rating={item.rating}
              comment={item.comment}
              deleteItemHandler={deleteItem}
            />
          );
        })}
      </tbody>
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
                          // getRatingTotal();
                          addItem(rating, comment);
                          setRatingAvg(
                            Math.round(
                              ((ratingTotal + rating) / (ratingCount + 1)) * 10
                            ) / 10
                          );
                          getRatingCount();
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
          <FeedbackListe></FeedbackListe>
        </table>
      </div>
    </div>
  );
}
//Known Problems: RatingAvg spinnt beim Aktualisieren wenn zum ersten Mal ein neues Item erstellt wird  (Komischer 0,. Wert)
//Wenn ein neues Item hinzugefügt wird und die InitialItems durch Eingabe entfernt werden, wird auch das letzte (neue) Item entfernt, aber in den Stats immer noch gelistet

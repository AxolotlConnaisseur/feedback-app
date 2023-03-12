import React from "react";
import DataItem from "./FeedbackData";
import "./FeedbackItem.css";

function FeedbackItem(props: any) {
  const isDeleted = React.useState(false);
  let isDeletedValue = isDeleted[0];
  let setIsDeletedValue = isDeleted[1];
  var hidden = { display: "none" };
  return (
    <tr>
      <td>
        <div className="card itemWrapper" style={isDeletedValue ? hidden : {}}>
          <span>
            <div className="rating">
              <label htmlFor="rating">{props.rating}</label>
            </div>
            <div>
              <button
                className="deleteBtn"
                onClick={() => {
                  setIsDeletedValue(true);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-x delete"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </span>

          <label htmlFor="card itemWrapper">{props.comment}</label>
        </div>
      </td>
    </tr>
  );
}
export default FeedbackItem;
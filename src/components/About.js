import React from "react";

export default function About(props) {
  return (
    <div class="accordion" id="accordionExample">
      <div
        class="accordion-item"
        style={{
          color: props.mode === "light" ? "black" : "white",
          backgroundColor: props.mode === "light" ? "white" : "black",
          border: "1px solid cadetblue",
        }}
      >
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "black",
              borderBottom: "1px solid cadetblue",
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Author
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">Ayush Kumar</div>
        </div>
      </div>
      <div
        class="accordion-item"
        style={{
          color: props.mode === "light" ? "black" : "white",
          backgroundColor: props.mode === "light" ? "white" : "black",
          border: "1px solid cadetblue",
        }}
      >
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            style={{
              color: props.mode === "light" ? "black" : "white",
              borderBottom: "1px solid cadetblue",
              backgroundColor: props.mode === "light" ? "white" : "black",
            }}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Languages Used
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">ReactJS and CSS</div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

function CardThree() {
  return (
    <div class="card bg-light">
      <h4 class="card-title card-img-overlay small text-white">
        category-title
      </h4>
      <img
        class="card-img-top"
        src="http://alturl.com/f6vaf"
        alt="Card image"
      />
      <div class="card-body" style={{ borderTop: "5px solid red" }}>
        <p class="card-text text-dark font-weight-bold ">
          Some example text. Some example text.Some example text.Some example
          text.
        </p>
        <a href="#" class="text-primary font-weight-bold text-decoration-none">
          See Profile live
        </a>
      </div>
    </div>
  );
}

export default CardThree;

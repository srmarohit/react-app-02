import React from "react";

function CardFour() {
  return (
    <div class="card bg-light">
      <img
        class="card-img-top "
        src="http://alturl.com/h3f9y"
        alt="Card image"
      />
      <div class="card-img-overlay" style={{ bottom: "50px" }}>
        <h4 class="card-title small text-white mb-5">category title </h4>
        <div className="py-5">
          <p class="card-text text-white font-weight-bold">
            Some example text Some example textSome example text{" "}
          </p>
          <a href="#" class="text-white font-weight-bold text-decoration-none">
            See Profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardFour;

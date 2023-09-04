import React from "react";
import {Link} from 'react-router-dom';

function Product() {
  return <div>
    <p> This is Products </p>
      <Link to="/" className="underline">
          Go to Dashboard
      </Link>
  </div>;
}

export default Product;

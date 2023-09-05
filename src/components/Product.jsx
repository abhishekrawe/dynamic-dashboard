import React from "react";
import {Link} from 'react-router-dom';

function Product() {
  return <div>
    <p> This is Products </p>
      <Link to="/users" className="underline">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go To Users
      </button>
      </Link>
  </div>;
}

export default Product;

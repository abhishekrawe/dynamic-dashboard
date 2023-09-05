import React from "react";
import { Link } from 'react-router-dom';

function Dashboard() {

  return <div>
    <h1> This is Dashboard </h1>
    <Link to="/users" className="underline">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Users
      </button>
    </Link>
  </div>;
}

export default Dashboard;

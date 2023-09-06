import React from "react";
import { Link } from 'react-router-dom';
import Chat from "./Chat";
function Dashboard() {

  return <div>
    <h1> This is Dashboard </h1>
    <Link to="/users" className="underline">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Go to Users
      </button>
    </Link>
    <div className="mt-5 text-center">
      <h1 className="text-3xl font-bold text-blue-600">Real Time Communication using PieSocket</h1>
      <Chat className="mt-4 p-4 border border-gray-300 rounded-lg shadow-md" />
    </div>
    
  </div>;
}

export default Dashboard;

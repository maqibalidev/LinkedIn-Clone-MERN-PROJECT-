import React, { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./App.css";
import Feed from "./Feed";
import Login from "./Login";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";
import { useSelector } from "react-redux";

function App({data}) {
// Empty dependency array to run it only once

  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* App Body */}
      <div className="app__body">
        <Sidebar name={data.name} email={data.email} />

        {/* Feed */}
        <Feed />
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;

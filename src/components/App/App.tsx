import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Search, { Bookmarks } from "../pages";
import "./app.scss";

const App = () => {
  return (
    <Router>
      <div className="photoflick">
        <Header />
        <Sidebar />
        <Route path="/" exact component={Search} />
        <Route path="/bookmarks" exact component={Bookmarks} />
      </div>
    </Router>
  );
};

export default App;

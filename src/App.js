import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchPage from "./SearchPage";
import RecommendedVideos from "./RecommendedVideos";
import VideoApp from "./VideoApp";
import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { Routes ,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     {/* <VideoApp/> */}
      <Router>
        <Header />
        <Routes>
        <Route path="/search" element={
          <div className="app__page">
          <Sidebar />
          <SearchPage />
          </div> 
        } />
        <Route path="/" element = { 
        <div className="app__page">
          <Sidebar />
          
          <RecommendedVideos />

        </div> 
        } />
       
        </Routes>
      </Router>
    </div>
  );
}

export default App;

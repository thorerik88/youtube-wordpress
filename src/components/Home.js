import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Navbar from './Navbar';
import Heading from './Heading';
import { useState } from 'react';
import axios from 'axios';

function Home() {

  const url = "http://wp.local/wp-json";
  const pages = "/wp/v2/pages";

  const [loading, setLoading] = useState("Loading...");
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  async function getPages() {

    try {
      const response = await axios.get(url + pages);
      const results = response.data;
      results.map(function(pages){
        return console.log(pages)
      })
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false)
    }
  }

  getPages();

  return (
  <>
    <Navbar />
    <Heading heading={"List of pages"} />
    <ul className="page-list">
      
    </ul>
  </>
  )
}

export default Home
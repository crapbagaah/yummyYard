import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

import Start_here from './pages/start_here';

import LogSignup from './pages/logsignup';

import Axios from 'axios';
const YummyYard = () => {

  const [text, setText] = useState("");

  const getData = async () => {
    try{
      const response = await Axios.get("http://localhost:5000/yummyYard");
      setText(response.data.Response);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return(
    
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/start_here" element={<Start_here />} />
          <Route path="/signup" element={<LogSignup />} />
        </Routes>
      </Router>
    </div>
    );
  }

export default YummyYard;
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
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
        </Routes>
      </Router>
    </div>
    );
  }

export default YummyYard;
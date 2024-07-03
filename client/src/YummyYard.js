import React, {useState, useEffect} from 'react';
import Navbar from './Components/navbar';
import Home from './Components/home';
import Footer from './Components/footer';
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
        <Navbar />
        <Home />
        <Footer/>
      </div>
    );
  }

export default YummyYard;
import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import About from './components/About'

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
      <About />
    </div>
  )
}

export default YummyYard;
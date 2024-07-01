import React, {useState, useEffect} from 'react';
import Axios from 'axios';
const YummyYard = () => {

  const [text, setText] = useState("");

  const getData = async () => {
    try{
      const response = await Axios.get("http://localhost:5000/yummyYard");
      setText(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return(
   <div>{text}</div>
  )
}

export default YummyYard;
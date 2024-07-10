import React ,{ useState } from 'react';
import Layout from '../Components/layout';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import '../styles/style.css';

const LogSignup = () => {

  const [isLogin, setIsLogin] = useState(true);



  return (

    <Layout>
    
    <div className="App">
      <div className="background"></div>
      <div className="overlay"></div>
      <div className="auth-wrapper">
        <div className="auth-tabs">
          <button onClick={() => setIsLogin(true)} className={isLogin ? "active" : ""}>Login</button>
          <button onClick={() => setIsLogin(false)} className={!isLogin ? "active" : ""}>Signup</button>
        </div>
        {isLogin ? <Login /> : <Signup />}
      </div>
    </div>


    </Layout>
  );
};

export default LogSignup;
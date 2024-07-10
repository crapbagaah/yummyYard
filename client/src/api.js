// src/api.js
import axios from 'axios';

//const API_URL = '/yummyYard/recipes/log_signup';

const signup = (username, email, password) => {
  return axios.post('/yummyYard/recipes/log_signup/auth/signup', { username, email, password });
};

const login = (email, password) => {
  return axios.post('/yummyYard/recipes/log_signup/auth/login', { email, password });
};

export { signup, login };

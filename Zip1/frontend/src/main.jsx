import { StrictMode } from 'react'
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./redux/app/store.js";

import './index.css'
import './css/Hero.css';
import './css/service.css';
import './css/skills.css';
import "./css/portfolio.css";
import "./css/portfolio.css";
import "./css/testimonial.css";
import './css/contact.css';
import App from './App.jsx'

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

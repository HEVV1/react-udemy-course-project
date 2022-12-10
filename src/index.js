import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/public.scss";
import AppClassFunc from "./appClassFunc";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {
      <div className="wrapper-page">
        <div className="wrapper-page-header-and-content">
          <div className="wrapper-page-content">            
            <AppClassFunc propsMsg="Hey"/>
          </div>
        </div>
      </div>
    }
  </React.StrictMode>
);
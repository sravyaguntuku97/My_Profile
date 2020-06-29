import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from './Pages/Header/Header.js'
import Footer from './Pages/Footer/Footer.js'
import Form from "./Pages/Forms/form.js"
import HomepageLayout from './Pages/props/Classprops.js'

function App() {
  return (
    <React.Fragment>
      <HomepageLayout/>
    </React.Fragment>
  );
}

export default App;

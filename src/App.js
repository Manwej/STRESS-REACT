import React from "react";
import "./App.css";

import Bookstore from "./components/Bookstore";
//import Book from "./components/Book";

function App() {
  // const helloBook = { title: 'hello', description: 'hello book' }

  return (
    <div className="container-fluid">
      <Bookstore />
    </div>
  );
}

export default App;

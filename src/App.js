import React from "react";
import "./App.css";

import Bookstore from "./components/Bookstore";
//import Book from "./components/Book";

function App() {
  // const helloBook = { title: 'hello', description: 'hello book' }

  return (
    <div className="container-fluid">
      {/* <Hello msg='Fist Hello' />
        <Hello msg='Second Hello' /> */}

      {/* <Book book={helloBook} i={99999} /> */}

      <div className="row" id="bookcontainer">
        <Bookstore />
      </div>
    </div>
  );
}

export default App;

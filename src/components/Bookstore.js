import React, { Component } from "react";
import Book from "./Book";

class Bookstore extends Component {
  constructor() {
    super();
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/zyv02")
      .then(res => {
        return res.json();
      })
      .then(result => {
        this.setState({ books: result.books });
      });
  }

  cutArray() {
    return this.state.books.filter((book, index) => {
      return index < 10;
    });
  }

  render() {
    return this.state.books.map((book, index) => {
      return <Book key={index} book={book} i={index} />;
    });
  }
}

export default Bookstore;

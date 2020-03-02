import React, { Component, Fragment } from "react";
import Book from "./Book";
import Search from "../components/Search";

class Bookstore extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      filteredBooks: [],
      search: ""
    };
    this.filterFunction = this.filterFunction.bind(this);
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

  handleChange = e => {
    let filter = e.target.value.toUpperCase();
    this.setState({ search: filter });
  };
  handleDeleteSearch = e => {
    console.log(e);
    this.setState({ search: "" });
  };
  filterFunction = e => {
    //  let filter = e.target.value.toUpperCase();
    //  console.log(e.target.value);
    let books = this.state.books;

    let arr = [];
    for (var i = 0; i < books.length; i++) {
      if (books[i].title.toUpperCase().includes(this.state.search)) {
        arr.push(books[i]);
      }
    }
    //this.setState({ filteredBooks: arr });
    console.log(this.state);

    return arr;
    //   const { books } = this.state;
    // let filter = e.target.value.toUpperCase();
    // console.log(e.target.value);
    // let books = this.state.books;

    // let arr = [];
    // for (var i = 0; i < books.length; i++) {
    //   if (books[i].title.toUpperCase().includes(filter)) {
    //     arr.push(books[i]);
    //   }
    // }
    // this.setState({ filteredBooks: arr });
    // console.log(this.state);
  };

  render() {
    const books = this.filterFunction();

    return (
      <Fragment>
        <Search
          book={books}
          onKeyUp={this.handleChange}
          onClick={this.handleDeleteSearch}
        />
        <div className="row" id="bookcontainer">
          <Fragment>
            {books.map((book, index) => {
              return (
                <Book key={index} book={book} i={index} arr={this.state} />
              );
            })}
          </Fragment>
          )}
        </div>
      </Fragment>
    );
  }
}

export default Bookstore;

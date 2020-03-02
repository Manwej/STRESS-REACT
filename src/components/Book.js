import React, { Component, Fragment } from "react";
import "../App.css";
import Modal from "./Modal";

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayModal: false,
      currentImageIndex: props.i
    };
    this.handleClick = this.handleClick.bind(this);
  }
  closeClick = () => {
    const { displayModal } = this.state;
    // // const { displayModal } = this.state;
    // // this.setState({ displayModal: !displayModal });

    console.log("in close click");
    // this.setState({ closeDisplayModal: !closeDisplayModal });
    this.setState({ displayModal: !displayModal });
  };

  nextCarousel = () => {
    const lastIndex = this.props.arr.books.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    this.setState({
      currentImageIndex: index
    });
  };
  prevCarousel = () => {
    const lastIndex = this.props.arr.books.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    this.setState({
      currentImageIndex: index
    });
  };
  handleClick() {
    const { displayModal } = this.state;

    this.setState({ displayModal: !displayModal });
  }
  render() {
    const book = this.props.book;
    return (
      <Fragment>
        <div className="flip-card col-md-6  col-lg-4  col-12">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={book.cover} alt="img" className="img-thumbnail" />
            </div>

            <div className="flip-card-back">
              <h3>{book.title} </h3>
              <p>{book.description} </p>
              <button className="btn btn-secondary" onClick={this.handleClick}>
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div>
          {this.state.displayModal && (
            <Modal
              book={this.props.arr.books[this.state.currentImageIndex]}
              onClickOne={this.closeClick}
              onClickTwo={this.nextCarousel}
              onClickThree={this.prevCarousel}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

// import React from "react";
// import "../App.css";
// import Modal from "./Modal";

// export default function Book(props) {
//   console.log("props :", props);
//   const book = props.book;
//   //const index = props.i;

//   function handleClick() {
//     console.log("The link was clicked.");
//   }

// }

/* <h1 className='title' style={style.title}>{index}{book.title}</h1>

            {book.cover &&
                <React.Fragment>
                    <img alt='img' src={book.cover} />
                    <p>image</p>
                </React.Fragment>
            }

            {index === 2 ?
                (<h2>index is 2</h2>) :
                (<h2>not 2</h2>)}

            <p>{book.description}</p> */

// const style = {
//     title: {
//         color: 'red'
//     },
//     container: {
//         // backgroundColor: 'white'
//     }*/

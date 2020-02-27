import React, { Component, Fragment } from "react";
import "../App.css";
import Book from "./Book";
import App from "../App";
import Bookstore from "./Bookstore";

export default class Modal extends Component {
  //   constructor() {
  //     // super();
  //     // this.state = {
  //     //   displayModal: false,
  //     //   closeDisplayModal: false,
  //     //   nextDisplayModal: false,
  //     //   prevDisplayModal: false
  //     // };
  //     // this.closeClick = this.closeClick.bind(this);
  //     // this.carousel = this.carousel.bind(this);
  //   }
  //   closeClick() {
  //     const { closeDisplayModal } = this.state;
  //     // const { displayModal } = this.state;
  //     // this.setState({ displayModal: !displayModal });

  //     console.log("in handle click");
  //     this.setState({ closeDisplayModal: !closeDisplayModal });
  //   }
  carousel() {
    console.log("The link was clicked carousel .");
  }
  render() {
    const book = this.props.book;
    console.log(this.props);

    // if (!this.state.closeDisplayModal) {
    return (
      <Fragment>
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={this.props.onClick}>
              &times;
            </span>
            <div className="modal-header">
              <button
                className="consBtn btn btn-outline-secondary"
                onClick={this.carousel}
              >
                Next
              </button>
              <button
                className="consBtn btn btn-outline-secondary"
                onClick={this.carousel}
              >
                Previous
              </button>
            </div>
            <img src={this.props.book.detail} alt="img" />
          </div>
        </div>
      </Fragment>
    );
    // } else {
    //   return <div></div>;
    // }
  }
}

// import React from "react";
// import "../App.css";
// import Book from "./Book";

// export default function Modal(props) {
//   console.log(props);
//   function handleClick() {
//     console.log("The link was clicked span.");
//   }
//   function carousel() {
//     console.log("The link was clicked carousel .");
//   }
//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close" onClick={closeClick}>
//           &times;
//         </span>
//         <div className="modal-header">
//           <button
//             className="consBtn btn btn-outline-secondary"
//             onClick={carousel}
//           >
//             Next
//           </button>
//           <button
//             className="consBtn btn btn-outline-secondary"
//             onClick={carousel}
//           >
//             Previous
//           </button>
//         </div>
//         <img src={props.book.detail} alt="img" />
//       </div>
//     </div>
//   );
// }

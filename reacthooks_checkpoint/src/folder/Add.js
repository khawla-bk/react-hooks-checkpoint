import React from "react";
import Modal from "react-modal";
import "../App.css";
class Add extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      link: "",
      star: "",
      modalIsOpen: false
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  add = (e) => {
    e.preventDefault();
    this.props.add(this.state.name, this.state.url, this.state.star);
    this.closeModal();
  };

  render() {
    return (
      <div className="">
        <button className="btn-modal" onClick={this.openModal}>
          <img
            className="img-plus"
            src="https://cpng.pikpng.com/pngl/s/96-965129_plus-sign-icon-button-green-approved-check-add.png"
            alt=""
          />
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="modall"
          contentLabel="Example Modal"
        >
          <form>
            <label for="fname">Movie Title</label>
            <input
              type="text"
              id="fname"
              name="name"
              placeholder="Enter the movie's name.."
              value={this.state.name}
              onChange={this.handleChange}
            />

            <label for="lname">Image</label>
            <input
              type="text"
              id="lname"
              name="url"
              placeholder="Enetr the Image's address.."
              value={this.state.url}
              onChange={this.handleChange}
            />

            <label for="lname">Movie's Rating</label>
            <input
              type="text"
              id="lname"
              name="star"
              placeholder="Enter the movie's rating.."
              value={this.state.star}
              onChange={this.handleChange}
            />

            <input
              className="input-sub"
              type="submit"
              value="Add film"
              onClick={(e) => this.add(e)}
            />
          </form>
        </Modal>
      </div>
    );
  }
}
export default Add;

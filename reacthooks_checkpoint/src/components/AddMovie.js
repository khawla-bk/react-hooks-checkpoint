import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";

function AddMovie({ Add }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [NewTitle, setNewTitle] = useState("");
  const [NewDesc, setNewDesc] = useState("");
  const [NewRate, setNewRate] = useState("");
  const [NewImg, setNewImg] = useState("");
  return (
    <>
      <Button className="addbtn" variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <input
            className="addinput"
            placeholder="Add the movie title"
            type="text"
            value={NewTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />

          <input
            input
            className="addinput"
            placeholder="Add the movie description"
            type="text"
            value={NewDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          />
          <input
            input
            className="addinput"
            placeholder="Add the movie rate"
            type="text"
            value={NewRate}
            onChange={(e) => setNewRate(e.target.value)}
          />

          <Form.File id="formcheck-api-regular">
            <Form.File.Label>Movie Poster</Form.File.Label>
            <Form.File.Input
              value={setNewImg}
              onChange={(e) => setNewImg(e.target.value)}
            />
          </Form.File>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() =>
              Add({
                title: NewTitle,
                description: NewDesc,
                rate: NewRate,
                img: NewImg
              })
            }
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMovie;

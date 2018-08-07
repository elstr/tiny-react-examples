import React from "react";
import { Modal, Button } from "react-bootstrap";

export const CustomModal = props => {
  const { title, body, handleSave } = props;
  return (
    <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{body}</Modal.Body>

        <Modal.Footer>
          <Button>Close</Button>
          <Button bsStyle="primary" onClick={handleSave}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

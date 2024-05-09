// ModalAqi.tsx
import React from "react";
import { Modal } from "react-bootstrap";
import { KeyLevel } from '../Footer/Footer'

interface Props {
  open: boolean;
  handleClose: () => void;
  level: KeyLevel;
}

const ModalAqi: React.FC<Props> = ({ open, handleClose, level }) => {
  return (
    <>
      <Modal
        size="lg"
        show={open}
        onHide={handleClose}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton style={{backgroundColor:`${level.backgroundColor}`, color:`${level.textColor}`}}>
          <Modal.Title id="example-modal-sizes-title-lg">
            AQI: {level.level.aqi} - {level.level.airPollutionLevel}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-container">
          <b>Health Implications</b>
          <p>{level.level.healthImplications}</p>
          <b>Cautionary Statement</b>
          <p>{level.level.cautionaryStatement}</p>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalAqi;

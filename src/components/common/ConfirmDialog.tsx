import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalBody from "react-bootstrap/ModalBody";
import ModalTitle from "react-bootstrap/ModalTitle";
import ModalFooter from "react-bootstrap/ModalFooter";

interface ConfirmDialogProps {
  show: boolean;
  handleClose: () => void;
  actionTitle: string;
  actionFunction: () => void;
  actionVariant: string;
  closeTitle: string;
  title: string;
  body: string;
}

export default function ConfirmDialog({
  show,
  handleClose,
  actionVariant,
  actionTitle,
  closeTitle,
  actionFunction,
  title,
  body,
}: ConfirmDialogProps) {
  return (
    <Modal show={show} onHide={handleClose} animation={true} centered>
      <ModalHeader closeButton>
        <ModalTitle>{title}</ModalTitle>
      </ModalHeader>
      <ModalBody>{body}</ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={handleClose}>
          {closeTitle}
        </Button>
        <Button variant={actionVariant} onClick={actionFunction}>
          {actionTitle}
        </Button>
      </ModalFooter>
    </Modal>
  );
}

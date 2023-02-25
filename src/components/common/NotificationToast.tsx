import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import ToastHeader from "react-bootstrap/ToastHeader";

interface NotificationToastProps {
  toastVariant: string;
  onClose: () => void;
  toastTitle: string;
  toastShow: boolean;
}
export default function NotificationToast({
  toastVariant,
  onClose,
  toastTitle,
  toastShow,
}: NotificationToastProps) {
  return (
    <ToastContainer
      containerPosition="fixed"
      className="p-3"
      position={"top-center"}
    >
      <Toast
        show={toastShow}
        onClose={onClose}
        bg={toastVariant}
        delay={1500}
        animation={true}
        autohide
      >
        <ToastHeader closeButton={true}>
          <strong className="me-auto">{toastTitle}</strong>
        </ToastHeader>
      </Toast>
    </ToastContainer>
  );
}

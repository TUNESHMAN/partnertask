import { Modal } from "antd";

function SuccessModal() {
  let secondsToGo = 30;
  const modal = Modal.success({
    title: "You have successfully added this photo to favorites",
    content: `Added to favorites`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `Added to favorites`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

export default SuccessModal;

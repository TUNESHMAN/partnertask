import { Modal } from "antd";

function ErrorModal() {
  let secondsToGo = 20;
  const modal = Modal.error({
    title: "Sorry, the picture for this day could not be retrieved",
    content: `Please try again or opt for a different day`,
  });
  const timer = setInterval(() => {
    secondsToGo -= 1;
    modal.update({
      content: `Error retrieving this photo`,
    });
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
    modal.destroy();
  }, secondsToGo * 1000);
}

export default ErrorModal;

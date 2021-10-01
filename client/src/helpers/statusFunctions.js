import axios from "axios";

const deliveryButton = () => {
  axios
    .put("api/packages/deliver?id=1")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

const clearButton = () => {
  axios
    .put("api/packages/clear?id=2")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { deliveryButton, clearButton };

import axios from "axios";
import { useContext } from "react";
import { stateContext } from "../context/StateContext";

const deliveryButton = () => {

  // const { selectPackage } = useContext(stateContext);

  axios
    .put("api/packages/deliver?id=2")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

    // selectPackage(2);

};

const clearButton = () => {

  // const { selectPackage } = useContext(stateContext);

  axios
    .put("api/packages/clear?id=3")
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });

    // selectPackage(3);
};

export { deliveryButton, clearButton };

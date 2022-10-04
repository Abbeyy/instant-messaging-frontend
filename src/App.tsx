import React, { useEffect } from "react";
import axios from "axios";
import { BACKEND } from "./api/endpoints";

const email = "example@email.com";

export const App = () => {
  useEffect(() => {
    axios
      .get(`${BACKEND}/currentUser/getCurrentUser`, {
        params: {
          email,
        },
      })
      .then((resp) => {
        console.log("resp=", resp);
      });
  }, []);

  return <div>Hello World!</div>;
};

// export const App = () => {
//   useEffect(() => {
// axios.get(`${BACKEND}/currentUser/${email}`).then((resp) => {
//   console.log("resp=", resp);
// });
//   }, []);

//   return <div>Hello World!</div>;
// };

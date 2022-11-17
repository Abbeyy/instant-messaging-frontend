import { useContext, useEffect } from "react";
import SocketContext from "./socketContext";
import React from "react";

// Very similar to the WsHook component above.
export const SocketConsumer = () => {
  const { ready, value, send } = useContext(SocketContext); // use it just like a hook

  useEffect(() => {
    if (ready) {
      send("test message");
    }
  }, [ready, send]); // make sure to include send in dependency array

  return (
    <div>
      Ready: {JSON.stringify(ready)}, Value: {value}
    </div>
  );
};

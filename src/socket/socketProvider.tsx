import { useEffect, useRef, useState } from "react";
import { WEB_SOCKET_BACKEND } from "../api/endpoints";

import React from "react";

import socketIOClient from "socket.io-client";

import SocketContext from "./socketContext";
import { Socket } from "../types/socket";

// Make sure to put WebsocketProvider higher up in
// the component tree than any consumers.
export const WebsocketProvider = (children?: JSX.Element[]) => {
  const [isReady, setIsReady] = useState(false);
  const [val, setVal] = useState(null);

  const webSocket = useRef(null);

  useEffect(() => {
    const socket = socketIOClient(WEB_SOCKET_BACKEND);

    socket.on("connect", () => setIsReady(true));
    socket.on("disconnect", () => setIsReady(false));
    socket.onAny((data: any) => setVal(data));

    webSocket.current = socket;

    return () => {
      socket.close();
    };
  }, []);

  const ret: Socket = {
    ready: isReady,
    value: val,
    send: webSocket.current?.send.bind(webSocket.current),
  };

  return (
    <SocketContext.Provider value={ret}>{children}</SocketContext.Provider>
  );
};

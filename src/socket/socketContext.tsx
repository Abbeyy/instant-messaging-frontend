import { createContext } from "react";
import { Socket } from "../types/socket";

const initialSocket: Socket = { ready: false, value: null, send: () => {} };

const SocketContext = createContext(initialSocket);

export default SocketContext;

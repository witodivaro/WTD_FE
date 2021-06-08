import { io } from "socket.io-client";

// ws(s) stands for http(s)
const socket = io("ws://localhost:3002");

export default socket;

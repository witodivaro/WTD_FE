import { io, Socket as SocketType } from "socket.io-client";
import { DefaultEventsMap } from "socket.io-client/build/typed-events";

import { SocketEvents } from "../redux/score/types";

type EventHandler = (...data: any) => void;

type EventListener = {
  handler: EventHandler;
  event: SocketEvents;
};

class Socket {
  connected: boolean = false;
  socket: SocketType<DefaultEventsMap, DefaultEventsMap> | null = null;
  listeners: EventListener[] = [];

  connect(csrfToken: string) {
    this.socket = io("ws://localhost:3002", {
      withCredentials: true,
      query: {
        _csrf: csrfToken,
      },
    });
    
    this.initializeListeners();
  }

  disconnect() {
    if (!this.socket) return;

    this.socket.disconnect();
  }

  addListener(listener: EventListener) {
    this.listeners.push(listener);
  }

  initializeListeners() {
    if (!this.socket) return;

    for (const listener of this.listeners) {
      const { handler, event } = listener;
      this.socket.on(event, handler);
    }
  }
}

export default new Socket();

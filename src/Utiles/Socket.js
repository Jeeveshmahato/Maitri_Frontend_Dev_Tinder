import { io } from "socket.io-client";
import { BaseUrl } from "./Constants";

export const createSocketConnection = () => {
  return io(BaseUrl);
};

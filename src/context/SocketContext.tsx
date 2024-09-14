"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { io, Socket } from "socket.io-client";

type SocketContext = {
  socket: Socket | undefined;
};

type SocketContextProviderProps = {
  children: ReactNode;
};

export const SocketContext = createContext<SocketContext>({} as SocketContext);

export const SocketContextProvider = ({
  children,
}: SocketContextProviderProps) => {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);

  useEffect(() => {
    const socket = io(process.env.BACKEND_URL as string, {
      extraHeaders: {
        "ngrok-skip-browser-warning": "69420",
      },
    });
    socket.emit("connection");
    setSocket(socket);

    return () => {
      socket.disconnect();
      setSocket(undefined);
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  return useContext(SocketContext);
};

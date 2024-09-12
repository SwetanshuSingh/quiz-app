"use client";
import { useSocket } from "@/context/SocketContext";
import { useEffect, useState } from "react";

const Room = ({ params }: { params: { id: string } }) => {
  const { socket } = useSocket();
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    if (!socket) return;

    socket.on("online-users", () => {});
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0F0F10] text-[#E7E7E4] flex justify-center items-center">
      <div className="text-lg">
        <p>Game Room Id: {params.id}</p>
        <p>No. of users: {onlineUsers}</p>
      </div>
    </div>
  );
};

export default Room;

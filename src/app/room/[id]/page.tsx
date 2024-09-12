"use client";

import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

const Room = ({ params }: { params: { id: string } }) => {
  const [socket, setSocket] = useState<Socket | null>();

  useEffect(() => {

  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0F0F10] text-[#E7E7E4] flex justify-center items-center">
      <div className="text-lg">
        <p>Game Room Id: {params.id}</p>
        <p>No. of users: 1</p>
      </div>
    </div>
  );
};

export default Room;

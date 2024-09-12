"use client";
import { Socket } from "socket.io-client";
import { DialogViewState } from "../StartQuizDialog";
import { DialogHeader, DialogTitle } from "../ui/dialog";
import { useState } from "react";

type JoinDialogViewProps = {
  setDialogView: React.Dispatch<React.SetStateAction<DialogViewState>>;
  socket: Socket | null;
};

const JoinDialogView = ({ setDialogView, socket }: JoinDialogViewProps) => {
  const [username, setUsername] = useState("");
  const [roomcode, setRoomCode] = useState("");

  const joinRoom = () => {
    const user = {
      username,
    };
    socket?.emit("new-user", user, (response: { status: string }) => {
      if (response.status === "success") {
        socket.emit("join-game-room", roomcode);
      }
    });
  };

  return (
    <div className="flex flex-col gap-8">
      <DialogHeader>
        <DialogTitle className="text-4xl font-bold text-[#E7E7E4]">
          Join Room!
        </DialogTitle>
      </DialogHeader>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-medium text-gray-200">Enter your name</p>
          <input
            className="p-3 rounded-md bg-[#1A1A1B] hover:bg-[#2A2A2B] text-[#E7E7E4] border border-[#E7E7E4] border-opacity-20"
            type="text"
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-xl font-medium text-gray-200">
            Enter room code below to join
          </p>
          <input
            className="p-3 rounded-md bg-[#1A1A1B] hover:bg-[#2A2A2B] text-[#E7E7E4] border border-[#E7E7E4] border-opacity-20"
            type="text"
            value={roomcode}
            onChange={(evt) => setRoomCode(evt.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={() => setDialogView("HOME")}
          className="w-fit bg-[#E7E7E4] text-[#0F0F10] inline-flex h-10 items-center justify-center rounded-md px-6 font-semibold shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Back
        </button>

        <button
          onClick={joinRoom}
          className="w-fit bg-[#E7E7E4] text-[#0F0F10] inline-flex h-10 items-center justify-center rounded-md px-6 font-semibold shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50 disabled:hover:cursor-not-allowed"
        >
          Join
        </button>
      </div>
    </div>
  );
};

export default JoinDialogView;

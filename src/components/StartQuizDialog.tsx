"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import HomeDialogView from "./dialog-views/HomeDialogView";
import CreateDialogView from "./dialog-views/CreateDialogView";
import JoinDialogView from "./dialog-views/JoinDialogView";
import { io, Socket } from "socket.io-client";

export type DialogViewState = "HOME" | "CREATE" | "JOIN";

const StartQuizDialog = () => {
  const [socket, setSocket] = useState<null | Socket>(null);
  const [dialogView, setDialogView] = useState<DialogViewState>("HOME");

  useEffect(() => {
    const socket = io("http://localhost:3001");
    socket.emit("connection");
    setSocket(socket);
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-fit bg-[#E7E7E4] text-[#0F0F10] inline-flex h-12 items-center justify-center rounded-md px-8 font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Start a Quiz
        </button>
      </DialogTrigger>
      <DialogContent className="bg-[#0F0F10] text-[#E7E7E4] border-[#E7E7E4] border-opacity-20">
        {dialogView === "HOME" ? (
          <HomeDialogView setDialogView={setDialogView} />
        ) : null}

        {dialogView === "CREATE" ? (
          <CreateDialogView setDialogView={setDialogView} />
        ) : null}

        {dialogView === "JOIN" ? (
          <JoinDialogView setDialogView={setDialogView} />
        ) : null}
      </DialogContent>
    </Dialog>
  );
};

export default StartQuizDialog;

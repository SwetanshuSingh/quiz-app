"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import HomeDialogView from "./dialog-views/HomeDialogView";
import CreateDialogView from "./dialog-views/CreateDialogView";
import JoinDialogView from "./dialog-views/JoinDialogView";

export type DialogViewState = "HOME" | "CREATE" | "JOIN";

const StartQuizDialog = () => {
  const [dialogView, setDialogView] = useState<DialogViewState>("HOME");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full sm:w-fit bg-[#E7E7E4] text-[#0F0F10] inline-flex h-12 items-center justify-center rounded-md px-4 sm:px-8 font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Start a Quiz
        </button>
      </DialogTrigger>
      <DialogContent className="bg-[#0F0F10] text-[#E7E7E4] border-[#E7E7E4] border-opacity-20 w-[90vw] max-w-[450px] p-4 sm:p-6">
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

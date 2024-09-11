"use client";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { PlusCircle, Users } from "lucide-react";
import { DialogViewState } from "../StartQuizDialog";

type HomeDialogViewProps = {
  setDialogView: React.Dispatch<React.SetStateAction<DialogViewState>>;
};

const HomeDialogView = ({ setDialogView }: HomeDialogViewProps) => {
  return (
    <>
      <DialogHeader className="space-y-2">
        <DialogTitle className="text-4xl font-bold text-[#E7E7E4]">
          Let's Get Started
        </DialogTitle>
        <p className="text-xl leading-tight font-medium text-gray-200">
          Create a quiz or join an existing quiz room to continue!
        </p>
      </DialogHeader>

      <div className="flex flex-col gap-4 mt-8">
        <Button
          className="px-5 py-6 flex items-center justify-start gap-2 bg-[#1A1A1B] hover:bg-[#2A2A2B] text-[#E7E7E4] border border-[#E7E7E4] border-opacity-20"
          onClick={() => setDialogView("CREATE")}
        >
          <PlusCircle className="h-6 w-6" />
          <span className="text-xl font-semibold">Create Room</span>
        </Button>

        <Button
          className="px-5 py-6 flex items-center justify-start gap-2 bg-[#1A1A1B] hover:bg-[#2A2A2B] text-[#E7E7E4] border border-[#E7E7E4] border-opacity-20"
          onClick={() => setDialogView("JOIN")}
        >
          <Users className="h-6 w-6" />
          <span className="text-xl font-semibold">Join Room</span>
        </Button>
      </div>
    </>
  );
};

export default HomeDialogView;

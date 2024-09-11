"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle, Users } from "lucide-react";

const StartQuizDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-fit bg-[#E7E7E4] text-[#0F0F10] inline-flex h-12 items-center justify-center rounded-md px-8 font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Start a Quiz
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#0F0F10] text-[#E7E7E4] border-[#E7E7E4] border-opacity-20">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-2xl font-bold text-[#E7E7E4]">
            Let's Get Started
          </DialogTitle>
          <p className="text-xl leading-tight font-medium text-gray-200">
            Create a quiz or join an existing quiz room to continue!
          </p>
        </DialogHeader>

        <div className="flex flex-col gap-4 mt-8">
          <Button
            className="px-5 py-6 flex items-center justify-start gap-2 bg-[#1A1A1B] hover:bg-[#2A2A2B] text-[#E7E7E4] border border-[#E7E7E4] border-opacity-20"
            onClick={() => console.log("Create Room clicked")}
          >
            <PlusCircle className="h-6 w-6" />
            <span className="text-xl font-semibold">Create Room</span>
          </Button>

          <Button
            className="px-5 py-6 flex items-center justify-start gap-2 bg-[#1A1A1B] hover:bg-[#2A2A2B] text-[#E7E7E4] border border-[#E7E7E4] border-opacity-20"
            onClick={() => console.log("Create Room clicked")}
          >
            <Users className="h-6 w-6" />
            <span className="text-xl font-semibold">Join Room</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StartQuizDialog;

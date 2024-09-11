"use client";

import { DialogViewState } from "../StartQuizDialog";

type CreateDialogViewProps = {
  setDialogView: React.Dispatch<React.SetStateAction<DialogViewState>>;
};

const CreateDialogView = ({ setDialogView }: CreateDialogViewProps) => {
  return (
    <div>
      <button className="w-fit bg-[#E7E7E4] text-[#0F0F10] inline-flex h-12 items-center justify-center rounded-md px-8 font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
        Back
      </button>
    </div>
  );
};

export default CreateDialogView;

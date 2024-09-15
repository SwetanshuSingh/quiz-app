"use client";
import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string;
}

const CopyButton = ({ value }: CopyButtonProps) => {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = (value: string) => {
    navigator.clipboard.writeText(value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setHasCopied(false), 2000);

    return () => clearTimeout(timeout);
  }, [hasCopied]);

  return (
    <button
      onClick={() => {
        copyToClipboard(value);
        setHasCopied(true);
      }}
      className="flex justify-center items-center p-4 rounded-md bg-[#1A1A1B] hover:bg-[#2A2A2B] text-[#E7E7E4] border border-[#E7E7E4] border-opacity-20 cursor-pointer"
    >
      {hasCopied ? <Check size={18} /> : <Copy size={18} />}
    </button>
  );
};

export default CopyButton;

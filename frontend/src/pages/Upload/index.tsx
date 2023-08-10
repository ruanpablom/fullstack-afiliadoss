import { useState } from "react";
import { PageTitle } from "@/components";
import { UploadForm } from "./components/UploadForm";

export function Upload(): JSX.Element {
  const [isFileSent, setIsFileSent] = useState<boolean>(false);
  return (
    <div id="container" className="flex flex-col gap-4 p-6">
      <PageTitle>Transactions file Upload</PageTitle>
      {isFileSent ? (
        <div className="flex flex-col gap-6">
          <span className="text-emerald-400">
            The file was sent successfully
          </span>
          <button
            className="flex items-center justify-center bg-indigo-500 text-slate-900 font-semibold px-2 py-1 rounded-sm cursor-pointer hover:bg-indigo-400"
            type="button"
            onClick={() => setIsFileSent(false)}
          >
            BACK
          </button>
        </div>
      ) : (
        <UploadForm onSuccess={() => setIsFileSent(true)} />
      )}
    </div>
  );
}

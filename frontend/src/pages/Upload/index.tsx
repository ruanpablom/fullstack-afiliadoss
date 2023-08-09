import { useState } from "react";
import { UploadForm } from "./components/UploadForm";

export function Upload(): JSX.Element {
  const [isFileSent, setIsFileSent] = useState<boolean>(false);
  return (
    <div id="container" className="flex flex-col gap-4 p-6">
      <h1 className="text-lg font-bold text-indigo-500 text-center">
        Transactions file Upload
      </h1>
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

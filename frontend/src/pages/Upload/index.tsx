import { UploadForm } from "./components/UploadForm";

export function Upload(): JSX.Element {
  return (
    <div id="container" className="flex flex-col gap-4 p-6">
      <h1 className="text-lg font-bold text-indigo-500 text-center">
        Transactions file Upload
      </h1>
      <UploadForm />
    </div>
  );
}

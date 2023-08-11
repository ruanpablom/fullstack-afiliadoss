import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

export function Layout(): JSX.Element {
  return (
    <div className="p-16 flex h-screen bg-gray-950 text-slate-500 font-fira justify-center">
      <div
        id="container"
        className="flex flex-col w-fit h-[calc(100vh-8rem)] bg-slate-900 border border-slate-800 rounded-lg"
      >
        <Header author="ruan-pablo-medeiros" />
        <div className="flex flex-col h-[calc(100%-3.8rem-2.8rem)] p-8 items-center overflow-auto">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

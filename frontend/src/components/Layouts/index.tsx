import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@/components';

export function Layout(): JSX.Element {
  return (
    <div className="p-16 flex h-screen bg-gray-950 text-slate-500 font-fira justify-center">
      <div
        id="container"
        className="flex flex-col w-[800px] h-[calc(100vh-8rem)] bg-slate-900 border border-slate-800 rounded-lg"
      >
        <Header author="ruan-pablo-medeiros" />
        <div className="h-[calc(100%-3.8rem-2.8rem)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

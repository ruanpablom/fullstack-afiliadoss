export interface PageTitleProps {
  children: React.ReactNode;
}

export function PageTitle({ children }: PageTitleProps): JSX.Element {
  return (
    <h1 className="text-lg font-bold text-indigo-500 text-center">
      {children}
    </h1>
  );
}

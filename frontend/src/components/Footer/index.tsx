import githubIcon from '@/assets/github.svg';

export function Footer(): JSX.Element {
  return (
    <footer className="flex flex-1 w-full border-0 border-t border-t-slate-800 items-center">
      <a
        className=" flex gap-2 items-center w-fit ml-auto border-0 border-l px-4 border-slate-800 h-full"
        href="https://github.com/ruanpablom"
        target="_blank"
        rel="noreferrer"
      >
        @ruanpablom
        <img src={githubIcon} alt="" />
      </a>
    </footer>
  );
}

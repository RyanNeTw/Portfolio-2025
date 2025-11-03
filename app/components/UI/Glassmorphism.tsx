import { FC, ReactElement } from "react";

const Glassmorphism: FC<{ reactElement: ReactElement; addStyle?: string }> = ({
  reactElement,
  addStyle,
}) => {
  return (
    <>
      <div
        className={` ${addStyle} backdrop-blur-xs isolate rounded-lg border border-white/10 bg-white/20 shadow-lg backdrop-filter`}
      >
        {reactElement}
      </div>
    </>
  );
};

export default Glassmorphism;

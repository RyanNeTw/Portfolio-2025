import { FC, ReactElement } from "react";

const Label: FC<{ text?: string; icon?: ReactElement; reverse?: boolean }> = ({
  text,
  icon,
  reverse = false,
}) => {
  return (
    <>
      <div
        className={`relative flex flex-row items-center justify-center gap-2 rounded-full ${reverse ? "bg-default" : "bg-white"} px-4 py-1`}
      >
        {icon}
        {text && (
          <p className={`${reverse ? "text-white" : "text-default"} text-xs`}>
            {text}
          </p>
        )}
        <div
          className={`absolute left-1 top-1 z-10 h-full w-full rounded-full border-2 border-dashed bg-transparent ${reverse ? "border-default" : "border-white"}`}
        ></div>
      </div>
    </>
  );
};

export default Label;

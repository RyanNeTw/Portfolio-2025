import { FC } from "react";
import Title from "./Title";

const Banner: FC<{ text: string; isVertical?: boolean; addStyle?: string }> = ({
  text,
  isVertical = false,
  addStyle,
}) => {
  return (
    <>
      <div
        className={`flex ${isVertical ? "h-full" : "w-full py-4"} items-center justify-center overflow-hidden ${addStyle}`}
      >
        <Title
          title={text}
          addStyle={`text-white ${isVertical && "-rotate-90"}`}
        />
      </div>
    </>
  );
};
export default Banner;

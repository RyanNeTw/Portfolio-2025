import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { motion } from "framer-motion";
import { FC } from "react";

const ScrollingText: FC<{
  text: string;
  isVertical?: boolean;
  addStyle?: string;
  default_velocity?: number;
}> = ({ text, addStyle, isVertical = false, default_velocity = 5 }) => {
  const vertical = isVertical && "rotate";

  return (
    <div
      className={`flex ${addStyle} ${vertical} items-center justify-center overflow-hidden bg-white`}
    >
      <VelocityScroll
        text={text}
        className={`${vertical} whitespace-nowrap text-6xl font-bold uppercase text-default`}
        default_velocity={default_velocity}
      />
    </div>
  );
};

export default ScrollingText;

import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { FC } from "react";

const Button: FC<{ text: string; changeText: string }> = ({
  text,
  changeText,
}) => {
  return (
    <>
      <AnimatedSubscribeButton
        buttonColor="#27262b"
        buttonTextColor="white"
        subscribeStatus={false}
        initialText={
          <span className="group inline-flex items-center">
            {text}
            <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        }
        changeText={
          <span className="group inline-flex items-center">
            <CheckIcon className="mr-2 size-4" />
            {changeText}
          </span>
        }
      />
    </>
  );
};

export default Button;

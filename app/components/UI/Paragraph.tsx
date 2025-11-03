import { FC } from "react";

const Paragraph: FC<{ text: string; addStyle?: string }> = ({
  text,
  addStyle,
}) => {
  return <p className={`${addStyle} text-sm`}>{text}</p>;
};

export default Paragraph;

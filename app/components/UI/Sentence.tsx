import { FC } from "react";

type IProps = {
  text: string;
  addStyle?: string;
};

const Sentence: FC<IProps> = ({ text, addStyle }) => {
  return (
    <>
      <h3 className={`${addStyle}`}>{text}</h3>
    </>
  );
};

export default Sentence;

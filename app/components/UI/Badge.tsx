import { FC } from "react";
import Glassmorphism from "./Glassmorphism";
import Sentence from "./Sentence";

type IProps = {
  reactElement: React.ReactNode;
  addStyle?: string;
};

const Badge: FC<IProps> = ({ reactElement }) => {
  return (
    <>
      <Glassmorphism
        reactElement={
          <>
            <div>{reactElement}</div>
          </>
        }
      />
    </>
  );
};

export default Badge;

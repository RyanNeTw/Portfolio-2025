import { FC } from "react";
import ScrollingText from "./ScrollingText";
import Banner from "./UI/Banner";
import { StudiType } from "../types";
import List from "./UI/List";

const Studi: FC<{ studies: StudiType[] }> = ({ studies }) => {
  return (
    <>
      <section className="flex h-screen w-screen flex-col justify-between bg-white">
        <Banner text="Studies" addStyle="bg-default" />
        <div className="flex h-full flex-col items-center justify-between">
          <List
            list={studies?.map((i) => {
              return {
                ...i,
                type: i.diploma_name,
              };
            })}
          />
        </div>
        <div>
          <ScrollingText text="Studies" addStyle="border-t border-default" />
        </div>
      </section>
    </>
  );
};

export default Studi;

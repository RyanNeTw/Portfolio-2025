import { FC } from "react";
import ScrollingText from "./ScrollingText";
import List from "./UI/List";
import { ExperienceType } from "../types";
import Banner from "./UI/Banner";

const Experience: FC<{ experiences: ExperienceType[] }> = ({ experiences }) => {
  return (
    <>
      <section className="flex h-screen w-screen flex-row justify-between bg-white">
        <Banner text="Work" isVertical addStyle="bg-default" />
        <div className="flex w-full flex-col items-center justify-between bg-white">
          <List list={experiences} />
        </div>
        <ScrollingText
          text="Experience"
          addStyle="w-1/12 border border-default"
          isVertical
          default_velocity={2}
        />
      </section>
    </>
  );
};

export default Experience;

import { FC } from "react";
import { GithubUser, ProjectType } from "../types";
import ScrollingText from "./ScrollingText";
import List from "./UI/List";
import Banner from "./UI/Banner";

const Project: FC<{ projects: ProjectType[] }> = ({ projects }) => {
  return (
    <>
      <section className="flex h-screen w-screen flex-row justify-between bg-default">
        <ScrollingText
          text="Projects"
          addStyle="w-1/12 border border-default"
          isVertical
          default_velocity={2}
        />
        <div className="flex w-full flex-col items-center justify-between bg-white">
          <Banner text="Projects" addStyle="w-/12 bg-default" />
          <div className="flex h-full w-full flex-col items-center justify-between">
            <List list={projects} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;

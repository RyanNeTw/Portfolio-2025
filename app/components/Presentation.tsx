import { FC, ReactElement } from "react";
import { GithubUser, SociaType } from "../types";
import Carousel from "./Carousel";
import NumberTicker from "@/components/ui/number-ticker";
import SparklesText from "@/components/ui/sparkles-text";
import BoxReveal from "@/components/ui/box-reveal";
import Label from "./UI/Label";
import Header from "./Header";

const Presentation: FC<{ user: GithubUser; socials: SociaType[] }> = ({
  user,
  socials,
}) => {
  const badges: { reactElement: ReactElement; text: string }[] = [
    {
      text: "Followers",
      reactElement: (
        <>
          <NumberTicker value={user.followers} className="text-sm" />
        </>
      ),
    },
    {
      text: "Followings",
      reactElement: (
        <>
          <NumberTicker value={user.following} className="text-sm" />
        </>
      ),
    },
    {
      text: user.hireable ? "Open to work" : "Not open to work",
      reactElement: (
        <>
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span
              className={`absolute inline-flex h-full w-full animate-ping rounded-full ${user.hireable ? "bg-green-400" : "bg-red-400"} opacity-75`}
            ></span>
            <span
              className={`relative inline-flex h-3 w-3 rounded-full ${user.hireable ? "bg-green-400" : "bg-red-400"}`}
            ></span>
          </span>
        </>
      ),
    },
  ];

  return (
    <>
      <section className="min-w-screen h-screen">
        <Carousel />
        <div className="noisy absolute h-full w-full opacity-5"></div>
        <div className="flex h-full flex-col items-center justify-center gap-4">
          <Header user={user} socials={socials} />
          <BoxReveal boxColor={"transparent"} duration={0.5}>
            <SparklesText
              text={"FULLSTACK DEVELOPER"}
              className="rounded-lg bg-white px-4 py-2 text-default"
            />
          </BoxReveal>
          <div className="flex flex-row gap-4">
            {badges.map((badge, index) => (
              <Label
                key={index}
                text={badge.text}
                icon={
                  <>
                    <div className="flex flex-row items-center justify-center gap-2 px-2 py-1">
                      {badge.reactElement}
                    </div>
                  </>
                }
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;

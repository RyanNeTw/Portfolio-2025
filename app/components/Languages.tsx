import IconCloud from "@/components/ui/icon-cloud";
import Paragraph from "./UI/Paragraph";
import Banner from "./UI/Banner";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "postgresql",
  "vercel",
  "testinglibrary",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "figma",
];

const Languages = () => {
  return (
    <>
      <section className="flex h-full w-full flex-col justify-between bg-default">
        <div className="relative flex items-center justify-center self-center px-12">
          <IconCloud iconSlugs={slugs} />
        </div>
        <div className="flex flex-col gap-4">
          <Paragraph
            addStyle="w-2/5 self-end px-12 text-center text-white"
            text="I love diving into projects that are all exciting and innovative !"
          />
          <Banner text="SKILLS" addStyle="bg-default border-t border-white" />
        </div>
      </section>
    </>
  );
};

export default Languages;

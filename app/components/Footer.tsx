import { FC } from "react";
import { GithubUser, SociaType } from "../types";
import Banner from "./UI/Banner";
import Title from "./UI/Title";
import { Link } from "@nextui-org/react";
import Button from "./UI/Button";
import Socials from "./Socials";

const Footer: FC<{ user: GithubUser; socials: SociaType[] }> = ({
  user,
  socials,
}) => {
  return (
    <>
      <footer className="flex h-full w-full items-start">
        <Banner text={"Thanks"} isVertical addStyle="w-1/12" />
        <section className="flex h-full w-full flex-col justify-center bg-white pl-12">
          <Title title="Thank you" />
          <h3 className="w-1/3 text-7xl font-bold">{`Let's get in touch`}</h3>
          <Link href={`mailto:${user.email}`} target="_blank" className="my-8">
            <Button text="Contact me" changeText="Thank you" />
          </Link>
          <Socials socials={socials} />
        </section>
      </footer>
    </>
  );
};

export default Footer;

import { FC } from "react";
import { GithubUser, SociaType } from "../types";
import Socials from "./Socials";
import { Image, Link } from "@nextui-org/react";
import Glassmorphism from "./UI/Glassmorphism";
import ImageContent from "./UI/ImageContent";

const Header: FC<{ user: GithubUser; socials: SociaType[] }> = ({
  user,
  socials,
}) => {
  return (
    <>
      <header className="flex w-1/2 flex-col items-center justify-center gap-2">
        <ImageContent
          src={user.avatar_url}
          alt={`${user.login}'s github profil picture`}
          addStyle="rounded-lg"
        />
        <Socials socials={socials} />
      </header>
    </>
  );
};

export default Header;

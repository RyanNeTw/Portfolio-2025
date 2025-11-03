import { FC } from "react";
import { SociaType } from "../types";
import Social from "./UI/Social";

const Socials: FC<{ socials: SociaType[] }> = ({ socials }) => {
  return (
    <>
      <ul className="flex flex-row gap-2">
        {socials?.map((social, index) => (
          <li key={index}>
            <Social social={social} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Socials;

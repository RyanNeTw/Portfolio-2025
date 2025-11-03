import { SociaType } from "@/app/types";
import { Link } from "@nextui-org/react";
import ImageContent from "./ImageContent";

type IProps = {
  social: SociaType;
};

const Social = ({ social }: IProps) => {
  if (!social?.name) return null;

  return (
    <>
      <div>
        <Link href={social.link} target="_blank">
          <ImageContent
            alt={`${social.name}'s logo`}
            src={`https://skillicons.dev/icons?i=${social.name}&theme=light`}
            addStyle="w-8"
          />
        </Link>
      </div>
    </>
  );
};

export default Social;

import { Image } from "@nextui-org/react";
import { FC } from "react";

type IProps = {
  src: string;
  alt: string;
  addStyle?: string;
};

const ImageContent: FC<IProps> = ({ src, alt, addStyle }) => {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        className={`${addStyle} opacity-100 transition hover:scale-95`}
        loading="lazy"
      />
    </>
  );
};

export default ImageContent;

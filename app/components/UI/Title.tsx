import { FC } from "react";

const Title: FC<{ title: string; isH1?: boolean; addStyle?: string }> = ({
  title,
  isH1 = false,
  addStyle,
}) => {
  const style = `text-primary font-bold uppercase text-3xl ${addStyle}`;
  return (
    <>
      {isH1 ? (
        <h1 className={style}>{title}</h1>
      ) : (
        <h2 className={style}>{title}</h2>
      )}
    </>
  );
};

export default Title;

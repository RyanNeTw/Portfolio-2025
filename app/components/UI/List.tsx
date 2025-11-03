import { FC } from "react";
import Paragraph from "./Paragraph";
import { Link } from "@nextui-org/react";
import Title from "./Title";
import Label from "./Label";
import { SquareArrowOutUpRight } from "lucide-react";

type IProps = {
  name: string;
  description: string;
  type: string;
  work?: string;
  date_start: string;
  date_end?: string;
  url: string;
  image_url: string;
};

const List: FC<{ list: IProps[] }> = ({ list }) => {
  return (
    <>
      <ul className="flex w-full flex-col">
        {list?.map((item, index) => (
          <li
            key={index + item.name}
            className={`group relative flex w-full flex-col items-start gap-2 border-b border-default px-12 py-4 transition-all ${index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"}`}
            style={{ cursor: `url(${item.image_url}), auto` }}
          >
            <div className="flex flex-row items-center gap-2">
              <Title title={item.name} />
              {item.work && <Label text={item.work} reverse />}
              {item.type && <Label text={item.type} reverse />}
              {item.url && (
                <Link
                  href={item.url}
                  target="_blank"
                  className="size-8 cursor-pointer text-default opacity-0 transition group-hover:opacity-100"
                >
                  <SquareArrowOutUpRight className="transition hover:scale-105" />
                </Link>
              )}
            </div>
            {item.description && (
              <Paragraph text={item.description} addStyle="text-default" />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;

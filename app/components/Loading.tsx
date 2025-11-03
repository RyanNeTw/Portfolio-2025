import { LoaderCircle } from "lucide-react";
import Carousel from "./Carousel";

const Loading = () => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <LoaderCircle className="size-12 animate-spin text-primary" />
        <Carousel />
      </div>
    </>
  );
};

export default Loading;

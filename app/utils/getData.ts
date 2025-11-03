import { EndPoints } from "../types";

type GetDataType = {
  link: EndPoints;
};

const getData = async <T>({ link }: GetDataType): Promise<T | null> => {
  try {
    const response = await fetch(link);
    if (!response.ok) return null;

    const res = await response.json();
    return Boolean(res?.data) ? res.data : null;
  } catch (e) {
    console.warn({ message: "Error", e });
    return null;
  }
};

export default getData;

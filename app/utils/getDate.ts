const getDate = (date: string) => {
  return date?.split("T")[0].replaceAll("-", "/");
};

export default getDate;

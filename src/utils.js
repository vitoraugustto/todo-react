export const formatDate = (d) => {
  const date = d.split("T")[0];

  const year = date.split("-")[0];
  const month = date.split("-")[1];
  const day = date.split("-")[2];

  return `${day + "/" + month + "/" + year}`;
};

export const formatTime = (date) => {
  const time = date.split("T")[1].split(".")[0];

  const hours = time.split(":")[0] - 3;
  const minutes = time.split(":")[1];
  return `${hours + ":" + minutes}`;
};

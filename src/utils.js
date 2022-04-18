const pad = (value) => {
  return value < 10 ? "0" + value : value;
};

export const formatDate = (d) => {
  const date = new Date(d);

  return `${
    date.getDate() + "/" + pad(date.getMonth()) + "/" + date.getFullYear()
  }`;
};

export const formatTime = (d) => {
  const date = new Date(d);

  return `${pad(date.getHours()) + ":" + pad(date.getMinutes())}`;
};

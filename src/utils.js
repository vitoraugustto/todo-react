export const formatDate = (date) => {
  const d = date.split("T")[0];

  const year = date.split("-")[0];
  const month = date.split("-")[1];
  const day = date.split("-")[2];

  return `${day + "/" + month + "/" + year} `;
};

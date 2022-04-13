import { API_INSTANCE } from "./axios";

export const fetchTasks = () => {
  return API_INSTANCE({
    url: "/api/v1/tasks",
  });
};

export const fetchSingleTask = ({ id }) => {
  return API_INSTANCE({
    url: `/api/v1/getById/${id}`,
  });
};

export const checkTask = ({ id }) => {
  return API_INSTANCE({
    url: `/api/v1/check/${id}`,
  });
};

export const createTask = (name, description) => {
  return API_INSTANCE({
    url: "/api/v1/tasks",
    method: "POST",
    data: {
      name: name,
      description: description,
    },
  });
};

export const deleteTask = ({ id }) => {
  return API_INSTANCE({
    url: `/api/v1/deleteOne/${id}`,
  });
};

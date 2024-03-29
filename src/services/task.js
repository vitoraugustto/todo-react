import { API_INSTANCE, POST } from "./axios";

export const fetchTasks = ({ page = 0, limit = 99 }) => {
  return API_INSTANCE({
    url: `/api/v1/tasks?page=${page}&limit=${limit}`,
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

export const createTask = ({ name, description, category }) => {
  return API_INSTANCE({
    url: `/api/v1/tasks`,
    method: POST,
    data: {
      name: name,
      description: description,
      category: category,
    },
  });
};

export const deleteTask = ({ id }) => {
  return API_INSTANCE({
    url: `/api/v1/deleteOne/${id}`,
  });
};

export const updateTask = ({ id, name, description, category }) => {
  return API_INSTANCE({
    url: `/api/v1/updateOne/${id}`,
    method: POST,
    data: {
      name: name,
      description: description,
      category: category,
    },
  });
};

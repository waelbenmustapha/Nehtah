import { URL } from "./apiUrl";
import { execRequest } from "./ExecRequest";
const token = localStorage.getItem("token");
export const addEmployeeApi = (data) => {

  return execRequest({
    baseURL: URL,
    url: "api/employee/add",
    method: "POST",
    data,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const getEmployees = () => {
  return execRequest({
    baseURL: URL,
    url: "api/employee/all",
    method: "GET",
  });
};

export const DeleteEmployee = (id) => {
  return execRequest({
    baseURL: URL,
    url: "api/employee/delete/" + id,
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

export const EditEmployeeApi = (id, data) => {
  return execRequest({
    baseURL: URL,
    url: "api/employee/edit/" + id,
    method: "PUT",
    data,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

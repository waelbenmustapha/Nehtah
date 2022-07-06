import { execRequest } from "./ExecRequest";

export const addEmployeeApi = ( data ) => {
    return execRequest({
      baseURL: 'http://localhost:8080/',
      url: 'api/employee/add',
      method: 'POST',
      data,
        headers: {
          Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3YWVsIiwiaWF0IjoxNjU3MDM2NjU0LCJleHAiOjE2NTcxMjMwNTR9.rN592kU1JVQtV3ELlXnFXnvvIu5b0u4ZJ7O982i-7UuwhOO2nDtDT28bn1O8nUSkWYYIbO1KAiwLj2evEmmBRA",
        },
      
    })
  };

  export const getEmployees = () => {
    return execRequest({
      baseURL: 'http://localhost:8080/',
      url: 'api/employee/all',
      method: 'GET',
      
    })
  };
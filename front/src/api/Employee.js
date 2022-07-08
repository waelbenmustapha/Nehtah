import { URL } from "./apiUrl";
import { execRequest } from "./ExecRequest";

export const addEmployeeApi = ( data ) => {
    return execRequest({
      baseURL: URL,
      url: 'api/employee/add',
      method: 'POST',
      data,
        headers: {
          Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3YWVsIiwiaWF0IjoxNjU3Mjg0NDgxLCJleHAiOjE2NTk4NzY0ODF9.SLJgJ-q3jJlZoRRa-pzeqAmoM_yvtk5ythDFB1EN6O9YTWeEsOVEx3UDX9Fj_M72xTCmUkpvdov_xXXmPTv_6g",
        },
      
    })
  };

  export const getEmployees = () => {
    return execRequest({
      baseURL: URL,
      url: 'api/employee/all',
      method: 'GET',
      
    })
  };

  export const DeleteEmployee = (id) => {
    return execRequest({
      baseURL: URL,
      url: 'api/employee/delete/'+id,
      method: 'DELETE',
      headers: {
        Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3YWVsIiwiaWF0IjoxNjU3Mjg0NDgxLCJleHAiOjE2NTk4NzY0ODF9.SLJgJ-q3jJlZoRRa-pzeqAmoM_yvtk5ythDFB1EN6O9YTWeEsOVEx3UDX9Fj_M72xTCmUkpvdov_xXXmPTv_6g",
      },
    })
  };

  export const EditEmployeeApi = ( id,data ) => {
    return execRequest({
      baseURL: URL,
      url: 'api/employee/edit/'+id,
      method: 'PUT',
      data,
        headers: {
          Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3YWVsIiwiaWF0IjoxNjU3Mjg0NDgxLCJleHAiOjE2NTk4NzY0ODF9.SLJgJ-q3jJlZoRRa-pzeqAmoM_yvtk5ythDFB1EN6O9YTWeEsOVEx3UDX9Fj_M72xTCmUkpvdov_xXXmPTv_6g",
        },
      
    })
  };
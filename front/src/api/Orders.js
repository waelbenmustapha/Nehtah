import { URL } from "./apiUrl";
import { execRequest } from "./ExecRequest";

export const addOrderToEmployeeApi = ( id,data ) => {
    return execRequest({
      baseURL: URL,
      url: 'api/events/add/'+id,
      method: 'POST',
      data,
        headers: {
          Authorization:"Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ3YWVsIiwiaWF0IjoxNjU3Mjg0NDgxLCJleHAiOjE2NTk4NzY0ODF9.SLJgJ-q3jJlZoRRa-pzeqAmoM_yvtk5ythDFB1EN6O9YTWeEsOVEx3UDX9Fj_M72xTCmUkpvdov_xXXmPTv_6g",
        },
      
    })
  };

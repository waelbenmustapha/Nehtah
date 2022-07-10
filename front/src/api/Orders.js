import { URL } from "./apiUrl";
import { execRequest } from "./ExecRequest";
const token = localStorage.getItem("token");
export const addOrderToEmployeeApi = ( id,data ) => {
  console.log(token)
    return execRequest({
      baseURL: URL,
      url: 'api/events/add/'+id,
      method: 'POST',
      data,
      headers: {
        Authorization:"Bearer "+token,
      },
      
    })
  };

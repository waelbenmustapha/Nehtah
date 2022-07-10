import { URL } from "./apiUrl";
import { execRequest } from "./ExecRequest";

export const signin = ( data ) => {
    return execRequest({
      baseURL: URL,
      url: 'api/auth/signin',
      method: 'POST',
      data,
        
      
    })
  };

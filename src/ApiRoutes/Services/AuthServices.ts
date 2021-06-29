import { LoginRequest, LoginResponse } from "../FetchTypes/authTypes";
import { Data, postFetch } from "../Utils/FetchControl";

class AuthServices {
  async login(userData: LoginRequest): Promise<Data<LoginResponse>> {
    return await postFetch(`/api/membership/login`, userData);
  }
}

export default AuthServices;

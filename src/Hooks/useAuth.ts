import { authServices } from "../ApiRoutes/Fetch";
import { LoginRequest } from "../ApiRoutes/FetchTypes/authTypes";
import UserStore from "../Stores/UserStore";

const useAuth = () => {
  /**
   * Login
   * @param credentials user and password
   * @returns True if valid login, False otherwise
   */
  const login = async (credentials: LoginRequest): Promise<Boolean> => {
    const res = await authServices.login(credentials);

    if (res.success) {
      //save token and return true
      UserStore.addUser({
        username: credentials.username,
        fullName: res.responseObject.fullName,
        accountNumber: res.responseObject.accountNumber,
      });
      return true;
    } else {
      return false;
    }
  };

  /**
   * Logout
   * @returns True for a successfull logout, False otherwise
   */
  const singout = (): Boolean => {
    try {
      UserStore.removeUser();
      return true;
    } catch (error) {
      return false;
    }
  };

  /**
   * Validate if there is almost a user stored in local storage, if is not the case, trigger a logout
   */
  const validate = async (): Promise<Boolean> => {
    if (UserStore.getUser().username !== "") {
      return true;
    } else {
      UserStore.removeUser();
      return false;
    }
  };

  return {
    login,
    singout,
    validate,
  };
};

export default useAuth;

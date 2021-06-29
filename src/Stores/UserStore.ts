import { makeAutoObservable } from "mobx";
import { LoginResponse } from "../ApiRoutes/FetchTypes/authTypes";

export interface UserType extends LoginResponse {
  username: string;
}

function cleanUser(): UserType {
  if (typeof window !== "undefined" && localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user") as string);
  } else {
    return {
      accountNumber: "",
      fullName: "",
      username: "",
    };
  }
}

class UserStore {
  user: UserType = cleanUser();

  constructor() {
    makeAutoObservable(this);
  }

  addUser(user: UserType) {
    localStorage.setItem("user", JSON.stringify(user));
    this.user = user;
  }

  removeUser() {
    localStorage.removeItem("user");
    this.user = cleanUser();
  }

  getUser(): UserType {
    return { ...this.user };
  }
}

const User = new UserStore();
export default User;

import axiosClientClient from "../../Config/axios";

export type Response<T> = {
  data: Data<T>;
};

export type Data<T> = {
  responseObject: T;
  exception: string;
  success: boolean;
  dateTime: string;
};

export async function getFetch(route: string): Promise<Data<any>> {
  try {
    const res: Response<any> = await axiosClientClient.get(route);
    return res.data;
  } catch (error) {
    return CatchObj;
  }
}

export async function postFetch(route: string, body: any): Promise<Data<any>> {
  try {
    const res: Response<any> = await axiosClientClient.post(route, body);
    return res.data;
  } catch (error) {
    return CatchObj;
  }
}

export async function patchFetch(route: string, body: any): Promise<Data<any>> {
  try {
    const res: Response<any> = await axiosClientClient.patch(route, body);
    return res.data;
  } catch (error) {
    return CatchObj;
  }
}

export async function deleteFetch(route: string): Promise<Data<any>> {
  try {
    const res: Response<any> = await axiosClientClient.delete(route);
    return res.data;
  } catch (error) {
    return CatchObj;
  }
}

const CatchObj: Data<any> = {
  success: false,
  exception: "There is a server trouble, try later",
  dateTime: "",
  responseObject: "",
};

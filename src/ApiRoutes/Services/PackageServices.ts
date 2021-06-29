import { PackageResponse } from "../FetchTypes/packageTypes";
import { Data, getFetch } from "../Utils/FetchControl";

class PackageServices {
  async getUserPackages(user: string): Promise<Data<PackageResponse[]>> {
    return await getFetch(`/api/packages/getPending?username=${user}`);
  }
}

export default PackageServices;

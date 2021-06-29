import { makeAutoObservable } from "mobx";
import { PackageResponse } from "../ApiRoutes/FetchTypes/packageTypes";

const cleanItem :PackageResponse = {
  courier: "",
  courierTracking: "",
  description: "",
  internalTracking: "",
  priceToPay: 0,
  statusHistory: [],
  supplier: "",
  weight: 0,
}

class ItemStore {
  item: PackageResponse = cleanItem;

  constructor() {
    makeAutoObservable(this);
  }

  addItem(item: PackageResponse) {
    localStorage.setItem("item", JSON.stringify("item"));
    this.item = item;
  }

  removeItem() {
    localStorage.removeItem("Item");
    this.item = cleanItem;
  }
}

const Item = new ItemStore();
export default Item;

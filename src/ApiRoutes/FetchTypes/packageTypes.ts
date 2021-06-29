interface Package {
  description: string;
  weight: number;
  priceToPay: number;
  supplier: string;
  courier: string;
  courierTracking: string;
  internalTracking: string;
  statusHistory: {
    description: string;
    date: string;
  }[];
}

export interface PackageResponse extends Package {}

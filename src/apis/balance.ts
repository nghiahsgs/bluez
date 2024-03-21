import { API_URL } from "@/constants/api-url";

import api from "./config";
import { IBalances } from "@/types/balance";

export const getBalance = async () => {
  const response = await api.get<Array<IBalances>>(API_URL.BALANCES);
  return response.data;
};

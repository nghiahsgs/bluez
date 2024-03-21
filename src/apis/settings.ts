import { API_URL } from "@/constants/api-url";

import api from "./config";

export const getSetting = async () => {
  const response = await api.post(API_URL.SETTINGS);
  return response.data;
};

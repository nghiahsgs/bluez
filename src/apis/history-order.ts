import { API_URL } from "@/constants/api-url";

import api from "./config";

export const getHistoryOrder = async () => {
  const response = await api.get(API_URL.HISTORY_ORDER);
  return response.data;
};

export const deleteHistoryOrder = async () => {
  const response = await api.delete(API_URL.DELETE_HISTORY_ORDER);
  return response.data;
};

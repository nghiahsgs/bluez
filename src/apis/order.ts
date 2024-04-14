import { API_URL } from "@/constants/api-url";

import api from "./config";
import { OrderItem } from "@/types/order";

const addIdListOrder = (data: Array<OrderItem>) => {
  return data.map((item, index) => ({ ...item, id: `${index + 1}` }));
};

export const getListOrder = async () => {
  const response = await api.get<Array<OrderItem>>(API_URL.ORDER);
  return addIdListOrder(response.data);
};

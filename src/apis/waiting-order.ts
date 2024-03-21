import { API_URL } from "@/constants/api-url";
import api from "./config";
import { IOrder } from "@/types/order";

export const getWaitingOrder = async () => {
  const response = await api.get(API_URL.WAITING_ORDER);
  return response.data;
};

export const createWaitingOrder = async (body: IOrder) => {
  const response = await api.post(API_URL.CREATE_WAITING_ORDER, body);
  return response.data;
};

export const updateWaitingOrder = async (body: IOrder) => {
  const { id, volume, note } = body;
  const bodyRequest = { volume, note };
  const response = await api.patch(
    API_URL.DELETE_WAITING_ORDER.replace(":order_id", id.toString()),
    bodyRequest
  );
  return response.data;
};

export const deleteWaitingOrder = async (id: number) => {
  const response = await api.delete(
    API_URL.DELETE_WAITING_ORDER.replace(":order_id", id.toString())
  );
  return response.data;
};

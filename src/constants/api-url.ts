export const API_URL = {
  WAITING_ORDER: "/v1/orders/waiting-orders/",
  CREATE_WAITING_ORDER: "/v1/orders/waiting-orders/",
  UPDATE_WAITING_ORDER: "/v1/orders/waiting-orders/:order_id",
  DELETE_WAITING_ORDER: "/v1/orders/waiting-orders/:order_id",

  HISTORY_ORDER: "",
  DELETE_HISTORY_ORDER: "",

  BALANCES: "/v1/balances/",
  SETTINGS: "",

  LOGIN: "/v1/users/login/",
  REGISTER: "/v1/users/register/",
  USER: "/v1/users/me/",
} as const;

export enum EOrderType {
  BUY = "Buy",
  SELL = "Sell",
}

export enum EStatusCondition {
  WAITING = "Waiting",
  TRIGGERED = "Triggered",
}

export interface IOrder {
  id: number;
  coin_name: string;
  note: string;
  conditions: Array<string> | string;
  order_type: EOrderType;
  volume: number;
}

export interface OrderItem {
  id: string;
  order_id: string;
  platform: string;
  shop_name: string;
  sku: string;
  base_cost: string;
  original_driver_link: string;
  designer_name: string;
  designer_link: string;
  raw_data: string;
  supply_company: string;
  payment_gateway: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  order_price: number;
  order_code: string;
  order_mail: string;
  order_phone: string;
  order_time: string;
  order_shipping_price: number;
  order_shipping_info: string;
  mockup_url: string;
  design_url: string;
  sku: string;
  product_type: string;
  variant: string;
  other_variant: string;
  quantity: number;
  platform: string;
  shop_name: string;
  supply_company: string;
  payment_gateway: string;
  designer_name: string;
}

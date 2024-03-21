import React from "react";
import { Button, Table } from "antd";
import type { TableProps } from "antd";

interface DataType {}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    render: () => <>-</>,
  },
  {
    title: "CoinPair",
    dataIndex: "coinPair",
    render: () => <>-</>,
  },
  {
    title: "Condition",
    dataIndex: "condition",
    render: () => <>-</>,
  },
  {
    title: "Condition Status",
    key: "conditionStatus",
    render: () => <>-</>,
  },
  {
    title: "Type",
    key: "type",
    render: () => <>-</>,
  },
  {
    title: "Volume(USDT)",
    key: "volume",
    render: () => <>-</>,
  },
  {
    title: "Created At",
    key: "created_at",
    render: () => <>-</>,
  },
  {
    title: "Triggered At",
    key: "triggered_at",
    render: () => <>-</>,
  },
  {
    title: "Order ID",
    key: "order_id",
    render: () => <>-</>,
  },
  {
    title: "Order Status",
    key: "order_status",
    render: () => <>-</>,
  },
  {
    title: "Message",
    key: "message",
    render: () => <>-</>,
  },
  {
    title: "",
    key: "",
    width: "5%",
    render: (_, record) => <Button danger>Delete</Button>,
  },
];

const data: DataType[] = [];

const HistoryOrder: React.FC = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={false}
    locale={{ emptyText: "No data" }}
  />
);

export default HistoryOrder;

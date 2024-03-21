import React from "react";
import { Table, Typography } from "antd";
import type { TableProps } from "antd";
import useGetBalance from "@/hooks/useGetBalances";
import { IBalances } from "@/types/balance";

const columns: TableProps<IBalances>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    render: (id) => <Typography.Text strong>{id}</Typography.Text>,
  },
  {
    title: "Coin Name",
    dataIndex: "coin_name",
    render: (coinName) => <Typography.Text>{coinName}</Typography.Text>,
  },
  {
    title: "Quantity",
    dataIndex: "coin_quantity",
    render: (quantity) => <Typography.Text>{quantity}</Typography.Text>,
  },
];

const Balance: React.FC = () => {
  const balance = useGetBalance();
  return (
    <Table
      loading={balance.isLoading || balance.isFetching}
      columns={columns}
      dataSource={balance.data || []}
      pagination={false}
      locale={{ emptyText: "No data" }}
    />
  );
};

export default Balance;

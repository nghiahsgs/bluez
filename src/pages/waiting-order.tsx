import React, { useState } from "react";
import { Button, Table, Tag, Typography } from "antd";
import type { TableProps } from "antd";
import CreateWaitingOrder from "@/components/create-waiting-order";
import styled from "styled-components";
import useGetWaitingOrder from "@/hooks/useGetListWaitingOrder";
import { EStatusCondition, IOrder } from "@/types/order";
import { numberToUSD } from "@/types/number";
import ModalWaitingOrder from "@/components/modal-waiting-order";
import ModalConfirmDelete from "@/components/modal-confirm-delete";
import useActionWaitingOrder from "@/hooks/useActionWaitingOrder";
import { useRecoilState } from "recoil";
import loadingState from "@/stores/loading";

const WaitingOrder: React.FC = () => {
  const waitingOrders = useGetWaitingOrder();
  const [modalDetail, setModalDetail] = useState<boolean>(false);
  const [modalDelete, setModalDelete] = useState<boolean>(false);
  const [orderDetail, setOrderDetail] = useState<IOrder>();
  const { deleteOrder } = useActionWaitingOrder();
  const [_, setLoading] = useRecoilState(loadingState);

  const columns: TableProps<IOrder>["columns"] = [
    {
      title: "ID",
      dataIndex: "id",
      render: (value) => <Typography.Text strong>{value}</Typography.Text>,
    },
    {
      title: "Coin name",
      dataIndex: "coin_name",
      render: (value) => <Typography.Text>{`${value}/USDT`}</Typography.Text>,
    },
    {
      title: "Conditions",
      dataIndex: "conditions",
      render: (conditions: Array<string>) => {
        const listConditions = conditions.map((item) => item.split(" "));
        const colorTag = listConditions.map((item) =>
          item[1] === EStatusCondition.WAITING ? "" : "green"
        );
        return (
          <Typography.Text>
            {listConditions.map((item, index, array) => (
              <>
                {item[0]}&nbsp; <Tag color={colorTag[index]}>{item[1]}</Tag>
                {index !== array.length - 1 && (
                  <>
                    <br /> <br />
                  </>
                )}
              </>
            ))}
          </Typography.Text>
        );
      },
    },
    {
      title: "Type",
      dataIndex: "order_type",
      render: (type) => (
        <Tag color={type === "Buy" ? "green" : "red"}>{type}</Tag>
      ),
    },
    {
      title: "Note",
      dataIndex: "note",
      render: (note) => <Typography.Text>{note}</Typography.Text>,
    },
    {
      title: "Volume",
      dataIndex: "volume",
      render: (volume) => (
        <Typography.Text strong>{`${numberToUSD(volume)}`}</Typography.Text>
      ),
    },
    {
      title: "",
      key: "",
      width: "5%",
      render: (_, record) => {
        const { conditions } = record;
        const listConditions = (conditions as Array<string>).map((item) =>
          item.split(" ")
        );
        const isDisable = listConditions.find(
          (item) => item[1] === EStatusCondition.TRIGGERED
        );
        return (
          <Button
            type="default"
            disabled={isDisable ? true : false}
            onClick={() => {
              showModal("detail");
              const newRecord = convertWaitingOrder(record);
              setOrderDetail(newRecord);
            }}
          >
            Edit
          </Button>
        );
      },
    },
    {
      title: "",
      key: "",
      width: "5%",
      render: (_, record) => (
        <Button
          danger
          onClick={() => {
            const newRecord = convertWaitingOrder(record);
            setOrderDetail(newRecord);
            showModal("delete");
          }}
        >
          Delete
        </Button>
      ),
    },
  ];

  const showModal = (type: "detail" | "delete") => {
    if (type === "detail") setModalDetail(true);
    else setModalDelete(true);
  };

  const handleOk = (type: "detail" | "delete") => {
    if (type === "detail") setModalDetail(false);
    else {
      if (orderDetail) deleteOrder.mutate(orderDetail.id);
      setModalDelete(false);
    }
    setOrderDetail(undefined);
  };

  const handleCancel = (type: "detail" | "delete") => {
    if (type === "detail") setModalDetail(false);
    else setModalDelete(false);
    setOrderDetail(undefined);
  };

  const convertWaitingOrder = (record: IOrder) => {
    const conditionString = (record.conditions as Array<string>)
      .map((item) => item.split(" "))
      .map((item) => item[0]);
    const newRecord = {
      ...record,
      coin_name: `${record.coin_name}/USDT`,
      conditions: conditionString,
    };
    return newRecord;
  };

  if (waitingOrders.isLoading || deleteOrder.isLoading) {
    setLoading(true);
  }

  return (
    <Container>
      <CreateWaitingOrder />
      <Table
        loading={waitingOrders.isLoading || waitingOrders.isFetching}
        columns={columns}
        dataSource={waitingOrders.data || []}
        pagination={false}
        locale={{ emptyText: "No data" }}
      />
      {orderDetail && modalDetail && (
        <ModalWaitingOrder
          title="Update order"
          open={modalDetail}
          handleOk={() => handleOk("detail")}
          handleCancel={() => handleCancel("detail")}
          onCancel={() => handleCancel("detail")}
          data={orderDetail}
        />
      )}
      {orderDetail && modalDelete && (
        <ModalConfirmDelete
          title="Delete waiting order"
          open={modalDelete}
          handleOk={() => handleOk("delete")}
          handleCancel={() => handleCancel("delete")}
          onCancel={() => handleCancel("delete")}
        />
      )}
    </Container>
  );
};

export default WaitingOrder;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

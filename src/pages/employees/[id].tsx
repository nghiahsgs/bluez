import { useRouter } from "next/router";
import React from "react";

const EmployeeDetail = () => {
  const route = useRouter();
  const { id } = route.query;
  console.log({ EmployeeDetail: id });

  return <div>EmployeeDetail</div>;
};

export default EmployeeDetail;

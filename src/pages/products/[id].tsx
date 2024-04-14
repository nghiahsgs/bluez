import { useRouter } from "next/router";
import React from "react";

const ProductDetail = ({ id }: any) => {
  console.log({ ProductDetail: id });

  return <div>ProductDetail</div>;
};

export default ProductDetail;

ProductDetail.getInitialProps = (context: any) => {
  return {
    id: context.query.id,
  };
};

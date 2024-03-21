import { getWaitingOrder } from "@/apis/waiting-order";
import loadingState from "@/stores/loading";
import { useQuery } from "react-query";
import { useSetRecoilState } from "recoil";

function useGetWaitingOrder() {
  const setLoadingState = useSetRecoilState(loadingState);
  const waitingOrders = useQuery("waiting-order", getWaitingOrder, {
    onSuccess: () => {
      setLoadingState(false);
    },
  });
  return waitingOrders;
}

export default useGetWaitingOrder;

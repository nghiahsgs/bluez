import { getBalance } from "@/apis/balance";
import { useQuery } from "react-query";

function useGetBalance() {
  const query = useQuery("user-balance", getBalance);
  return query;
}

export default useGetBalance;

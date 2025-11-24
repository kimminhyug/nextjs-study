import { CustomError } from "@/app/api/custom-error";
import { QUERY_KEY_SET } from "@/app/api/query-key";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { ICustomQueryProps } from "./types";

const commonQueryOptions = {
  staleTime: Infinity,
};

export const useCustomQuery = <TData>(
  props: ICustomQueryProps<TData>
): UseQueryResult<TData, CustomError> => {
  return useQuery<TData, CustomError>({
    ...commonQueryOptions,
    queryKey: [...QUERY_KEY_SET[props.queryKey]],
    queryFn: props.queryFn,
    refetchInterval: props.refetchTime ?? 0,
  });
};

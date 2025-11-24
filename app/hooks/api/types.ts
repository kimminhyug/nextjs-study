import { CustomError } from "@/app/api/custom-error";
import { QUERY_KEY_TYPE } from "@/app/api/query-key";
import { QueryFunction, QueryKey } from "@tanstack/react-query";

export interface ICustomQueryProps<TData> {
  queryFn: QueryFunction<TData, QueryKey>;
  queryKey: QUERY_KEY_TYPE;
  refetchTime?: number;
}
export interface ICustomMutationProps<TData, TVariables> {
  queryKey: QUERY_KEY_TYPE;
  mutationFn: (variables: TVariables) => Promise<TData>;
  onSuccess?: (data: TData) => void;
  onError?: (error: CustomError) => void;
  isInvalidateQueries?: boolean;
}

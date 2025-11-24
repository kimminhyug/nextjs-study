import { CustomError } from "@/app/api/custom-error";
import { QUERY_KEY_SET } from "@/app/api/query-key";
import { queryClient } from "@/app/api/react-query";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { ICustomMutationProps } from "./types";

export const useCustomMutation = <TData, TVariables = unknown>(
  props: ICustomMutationProps<TData, TVariables>
): UseMutationResult<TData, CustomError, TVariables> => {
  const { isInvalidateQueries = true } = props;
  return useMutation<TData, CustomError, TVariables>({
    // mutationKey:[...QUERY_KEY_SET[props.queryKey]],
    mutationFn: props.mutationFn,
    //  _payload, _result, _context: MutationFunctionContext
    onSuccess: (data) => {
      if (props.onSuccess) {
        props.onSuccess(data);
      }

      if (isInvalidateQueries) {
        // 성공 시 데이터 업데이트를 위해 쿼리 무효화
        queryClient.invalidateQueries({
          queryKey: [...QUERY_KEY_SET[props.queryKey]],
        });
      }
    },
    onError: props.onError,
  });
};

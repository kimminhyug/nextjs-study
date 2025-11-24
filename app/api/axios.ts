import axios, { AxiosError, AxiosResponse } from "axios";
import { CustomError } from "./custom-error";

/** 실제 환경에서는 백엔드 api에 최적화(평균 요청 시간과 최악 요청시간 확인 후) 해서 적용
 *  대용량의 경우 await api.get("/statistics", { timeout: 30*1000 });  타임 아웃 개별 적용
 */
export const api = axios.create({
  baseURL: "",
  timeout: 5000,
});

api.interceptors.response.use(
  (response: AxiosResponse) => {
    // 백엔드에서 서비스 요청에 성공하여도 실제 서비스가 실패인 경우 데이터에 상태가 넘어 올수 있기에 에러 처리
    if (response.data.error) {
      throw new CustomError(
        response.status,
        response.data.error,
        response.data
      );
    }
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      throw new CustomError(
        error.response.status,
        `상태코드(${error.response.status}):요청에 실패 하였습니다.`,
        error.response?.data
      );
    } else if (error.request) {
      // 네트워크 응답 안온 경우
      throw new CustomError(408, "서버로부터 응답을 받지 못했습니다.");
    } else {
      throw new CustomError(0, `예상치 못한 오류: ${error.message}`);
    }
  }
);

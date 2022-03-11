import { apiRequestModel, axios } from "../constants/http";
import { BASE_API_URL } from "../constants/config";

class MainApi {
  //接口请求
  requestData(params: any = {}) {
    return axios.post(
      `${BASE_API_URL}/xxx`,
      apiRequestModel(params),
    );
  }
}
export const mainApi = new MainApi();

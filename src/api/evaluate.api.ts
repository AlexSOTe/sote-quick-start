import { apiRequestModel, axios } from "../constants/http";
import { BASE_API_URL } from "../constants/config";

class Evaluate {
  createPhoneRecycleOrder(params: any = {}) {
    return axios.post(
      `${BASE_API_URL}/customer/phoneRecycleOrder/createPhoneRecycleOrder`,
      apiRequestModel(params),
    );
  }
  queryPhoneModelTree(params: any = {}) {
    return axios.post(
      `${BASE_API_URL}/customer/phoneRecycleOrder/queryPhoneModelTree`,
      apiRequestModel(params),
    );
  }
  //获取品牌树
  queryModelAndBrands(params: any = {}) {
    return axios.post(
      `${BASE_API_URL}/customer/cyclingBu2cPredict/queryModelAndBrands`,
      apiRequestModel(params),
    );
  }
  //获取省市区数据
  queryCityList(params: any = {}) {
    return axios.post(
      `${BASE_API_URL}/customer/cyclingBu2cPredict/queryCityList`,
      apiRequestModel(params),
    );
  }
  //获取机型对应的问题列表
  queryPredictAll(params: any = {}) {
    return axios.post(
      `${BASE_API_URL}/customer/cyclingBu2cPredict/queryPredictAll`,
      apiRequestModel(params),
    );
  }
  //获取估价信息
  queryPredictPrice(params: any = {}) {
    return axios.post(
      `${BASE_API_URL}/customer/cyclingBu2cPredict/queryPredictPrice`,
      apiRequestModel(params),
    );
  }
}
export default new Evaluate();

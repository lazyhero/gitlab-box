// TODO 没写完
import { cloneDeep } from "lodash";

export default class AxiosResponseErrorHandler {
  config = {
    ignoreCodeList: [],
    ignoreApiList: [],
  };
  
  constructor(config) {
    this.config = cloneDeep(config)
  }
}
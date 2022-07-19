import * as axios from "axios";

export default class getJwtToken {
  constructor() {
    this.api_token = null;
    this.client = null;
    this.api_url = "https://172.16.1.29:8443/entrata";
  }

  init = () => {
    let headers = {
      Accept: "*/*",
    };

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers: headers,
    });

    return this.client;
  };

  getLoginUser = (data) => {
    return this.init().post(this.api_url+"/api/sec/auth", data);
  };
}

import * as axios from "axios";

export default class Api {
  
  constructor() {
   // this.api_token = null;
    this.client = null;
    this.api_url = "http://172.16.1.27:8080/entrata2";
  }

  init = () => {
  this.api_token = localStorage.getItem('jwt') ;

  let headers = {
      Accept: "application/json",
      //ContentType: 'application/json; charset=utf-8'
    };
  
    
    if (this.api_token) {
      headers.Authorization = `JWT ${this.api_token}`;
      //headers.Authorization =  `JWT eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYxMzcxMzM3NiwiaWF0IjoxNjEzNjI2OTc2fQ.piUpGeXU3hO9TYWPsMWRypm4uUwmocpHtklSx2MH8WnXZ3Wr4qFtQVQfXWngYDBJvNu27RtfuxhgRMyyUNIXgw`
    }

    this.client = axios.create({
      baseURL: this.api_url,
      timeout: 31000,
      headers:headers,
    });

   return this.client;
  
  };
  
  getUserList = (params) => {
    return this.init().get(this.api_url+"/transactions/findAll.do?page=0&size=100&sort=DESC&sortBy=createdOn", 
    { params: params });

  };

  addNewUser = (data) => {
    return this.init().post(this.api_url+"/security/authenticate.do", data);
  };

  countTransaction = (data) => {
    return this.init().get(this.api_url+"/sss/report/countTransactionsByCriteria.do", data);
  };
}

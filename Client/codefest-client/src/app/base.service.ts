import Axios          from 'axios';
import { Injectable } from '@angular/core';
import { Headers }    from '@angular/http';
import { APIInfo }    from './Url.Statics';
import 'rxjs/add/operator/map';

@Injectable()
export class BaseService {
  private axios: any;
  private headers: Headers;

  constructor(private apiAddress: APIInfo) {
    this.axios = Axios;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type, x-xsrf-token');
  }

  /*
   * handle base get url
   */
  get(path, params) {
    return new Promise((resolve, reject) => {
      this.axios.get(path, {
        params: params
      }).then(response => {
        resolve(response);
      }).catch(err => {
        reject(err);
      })
    })
  }

  /*
   * handle base post url
   */
  post(path, data) {
    return new Promise((resolve, reject) => {
      this.axios.post(path, data).then(response => {
        resolve(response);
      }).catch(err => {
        reject(err);
      });
    })
  }

  /*
   * handle put url
   */
  put(path, data) {
    return new Promise((resolve, reject) => {
      this.axios.put(path, data).then(response => {
        resolve(response.data);
      }).catch(err => {
        reject(err);
      });
    })
  }

  /*
   * handle delete url
   */
  delete(path, params) {
    return new Promise((resolve, reject) => {
      this.axios.delete(path, {
        params: params
      }).then(response => {
        resolve(response.data);
      }).catch(err => {
        reject(err);
      })
    })
  }
}

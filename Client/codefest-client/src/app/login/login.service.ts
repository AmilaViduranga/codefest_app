import { Injectable }     from '@angular/core';
import { BaseService }    from '../base.service';
import { APIInfo }        from '../Url.Statics';

@Injectable()
export class LoginService {
  constructor(private base: BaseService, private  apiInfo: APIInfo) { }

  login(authInfo) {
    return new Promise((resolve, reject) => {
      this.base.post(this.apiInfo.login, authInfo).then(respond => {
        resolve(respond);
      }).catch(err => {
        reject(err);
      })
    })
  }
}

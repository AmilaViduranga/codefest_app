import { Injectable }     from '@angular/core';
import { BaseService }    from '../base.service';
import { APIInfo }        from '../Url.Statics';

@Injectable()
export class RegisterService {
  constructor(private base: BaseService, private  apiInfo: APIInfo) { }

  register(regiserInfo) {
    return new Promise((resolve, reject) => {
      this.base.post(this.apiInfo.register, regiserInfo).then(respond => {
        resolve(respond);
      }).catch(err => {
        reject(err);
      })
    })
  }
}

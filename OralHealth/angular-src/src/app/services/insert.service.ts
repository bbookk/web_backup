import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

import { Connect} from '../model/connect';

import { Student  } from '../model/student';

@Injectable()
export class InsertService {

  constructor(private http: Http) { }

  ins(user:Student): Observable<boolean>{

    console.log(user);

    let url =Connect.getHostUrl()+'/int.php';
    console.log(url);
    let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
    return this.http.post(url, user, header).map((res: Response) => { return this.parsein(res)}).catch((error: any) => { 
      console.log("error");
      return  Observable.of(false) ;
     }); ;
  }

  parsein(res){
    let data = res.json();

    if (data.Error == "true") {
    
      return false;
    } else {
      console.log(data);
     
      return true;
    }
  }

}

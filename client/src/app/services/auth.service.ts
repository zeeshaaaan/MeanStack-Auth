import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { apiurls } from '../api-urls';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http= inject(HttpClient);

  registeredService(registerObj:any){
    return this.http.post<any>(`${apiurls.authServiceApi}register`,registerObj)
  }

  loginService(loginObj:any){
    return this.http.post<any>(`${apiurls.authServiceApi}login`,loginObj)
  }

  sendEmailService(email:string){
    return this.http.post<any>(`${apiurls.authServiceApi}send-email`,{email:email})
  }

  resetPasswordService(resetObj:any){
    return this.http.post<any>(`${apiurls.authServiceApi}reset-password`,resetObj)
  }
}

import { Injectable, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //Atributos
  isLoggedIn = false;
  redirectUrl : string;
  private username:string='Luis';
  private password:string='1234';
  autenticacion:boolean=false;
  constructor() { }

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = true)
    )
  }
  auth(username:string,password:string){
    if(this.username==username && this.password==password){
      this.autenticacion=true;
    }else{
      this.autenticacion=false;
    }
    return this.autenticacion;
  }

  login2(): Observable<boolean>{ 
      if(this.autenticacion){
      return of(true).pipe(
        delay(1000),
        tap(val => this.isLoggedIn = true)
      )
      }
  }
  logout(): void {
    this.isLoggedIn = false;
  }
}

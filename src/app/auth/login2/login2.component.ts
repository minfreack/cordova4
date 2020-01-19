import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  items;
  form;
  messages: string;
  auth:boolean=true;
  constructor(private formBuilder:FormBuilder,private authService: AuthService, private router: Router) {
    this.form=formBuilder.group({
      usuario: '',
      password: ''
    })
   }

  ngOnInit() {
  }
  onSubmit(){
      this.auth=this.authService.auth(this.form.value.usuario, this.form.value.password);
      if(this.auth){
      this.login();
      }
  }


  login() {
    this.messages = 'Trying to validate...';  
    this.authService.login2().subscribe(()=>{
      if(this.authService.isLoggedIn){
        let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl):'/admin';
      }
    })
  }

  logout(){
    this.authService.logout();
  }
}

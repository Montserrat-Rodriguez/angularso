import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent{

    constructor(private _router: Router, private api: ApiService){

    }

    user: string;
    password: string;

    onLogin(): void{
        let login;
        login = {'username' : this.user,
                 'password': this.password,};
        this.api.login(login).subscribe(
            data => {       
                //console.log(data.password);         
                if(data.token === "c1b0eae65cbb2891d41bb4399269eb5cf0fbc9e9"){
                    this._router.navigate(['../home']);
                }else{
                    alert('Usuario o contraseña incorrectos');
                }
            },
            error => {
              console.log(error)
            }
          );


        
    }

    ngOnInit(){}
}
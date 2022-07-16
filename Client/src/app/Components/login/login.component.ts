import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!:FormGroup;
  model:any={};
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;
  decryptPass:any='';

  constructor(private formBuilder:FormBuilder,private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:[''],
      password:[''],
    })
  }

  decrypt()
  {
const salt = bcrypt.genSaltSync(10);
    this.decryptPass = bcrypt.hashSync(this.loginForm.value.password, salt);
    console.log("decrypt",this.decryptPass);
  }


  login()
  {
    if(!this.loginForm.value.username || !this.loginForm.value.password)
    {
      alert("Plese fill all the fields")
    }
    else{
      this.http.get<any>("http://localhost:3333/signUpUsers").subscribe(res=>{
        // console.log();
        const user=res.find((a:any)=>{

                   console.log("userlogin",a.password);

          return a.username===this.loginForm.value.username &&
                  bcrypt.compare(this.loginForm.value.password,a.password);
        });
        if(user)
        {
          localStorage.setItem('username',user.username);
          // localStorage.setItem("token",user.token);

          this.loginForm.reset();
          this.router.navigate(['TC']);
        }
        else{
          alert("Not registered !!");
        }
      },err=>{
        alert("something went wrong !!")
      })
    }
   
  }
}

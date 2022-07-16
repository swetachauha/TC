import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public loginForm!:FormGroup;
  model:any={};
  errorMessage:String | undefined;
  showFlash: boolean =false;
  showFlashError:boolean=false;
  encryptedPass:any='';
  
  constructor(private formBuilder:FormBuilder,private http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      username:[''],
      password:[''],
      conf_password:[''],
    })
  }



  passEncrypt()
  {
    const salt = bcrypt.genSaltSync(10);
    this.encryptedPass = bcrypt.hashSync(this.loginForm.value.password, salt);
    console.log("encr",this.encryptedPass);
  }


  login()
  {

    var user:any;
   

  this.http.get<any>("http://localhost:3333/signUpUsers").subscribe((res: any[])=>{
    console.log("signup");

       const tc=res.find((a:any)=>{
        console.log("signup");

        a.username===this.loginForm.value.username
        user=a.username;
        console.log("signup");

       
     });


    this.passEncrypt();
    console.log("pencryptinlogin",this.loginForm.value.password);
    const signup={
      'username':this.loginForm.value.username,
      'password':this.encryptedPass,
    };

    if(!this.loginForm.value.username || !this.loginForm.value.password || !this.loginForm.value.conf_password)
    {
      alert("Please fill all the fields")
    }
    else if(this.loginForm.value.password!==this.loginForm.value.conf_password)
    {
      alert("Password does not match")
    }
    else if(user===this.loginForm.value.username)
    {
      alert("User already Exists");

    }
    else{
      this.http.post<any>("http://localhost:3333/signUpUsers",signup).subscribe(res=>{
        console.log("signup",signup);
        this.loginForm.reset();
        this.router.navigate(['login']);
      },err=>{
        alert("something went wrong !!")
      })
    }
  })
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamServiceService } from '../exam-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users:any;

  loginid:string = "";
  password:string = "";
  role:string = "";
  errorMsg = "";

  constructor(private loginservice:ExamServiceService,private router:Router) { }

  ngOnInit(): void {

  }

  validateLogin()
  {
    if(this.role=="student")
    {
      if(this.loginid == "" || this.password == "")
      {
        alert("Enter a login id or password");
      }
      else
      {
      this.loginservice.loginstudent(this.loginid).subscribe(
        (data)=>{
          this.users=data;

          sessionStorage.setItem('userid',this.users.userid);

          if(this.users==null)
          {
            console.log(data);
            alert('Invalid UserId or Password')
          }

          else if(this.users.password==this.password)
          {
            console.log(data);
            console.log(this.users);
            console.log(this.users.password);
            alert('Login Successfull');
            this.router.navigate(['homepage']);
          }
          else
            alert('Invalid userId or Password')
                }
      )
              }
              
    }
    else if(this.role=="admin")
    {
      if(this.loginid == "" || this.password == "")
      {
        alert('Invalid UserId or Password')
      }
      else if(this.password == "admin")
      {
        console.log("XYZ");
        this.router.navigate(['adminpage']);
      }
    }
    else
    {
      alert("You need to select admin/student");
    }
  }

}

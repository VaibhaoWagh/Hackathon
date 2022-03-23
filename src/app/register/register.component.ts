import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamServiceService } from '../exam-service.service';
import { Users } from '../users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:Users;
  constructor(private userService: ExamServiceService,private router:Router) {
    this.user = new Users();
   }

  ngOnInit(): void {
  }
  saveUser(userForm:any)
  {
    this.user = userForm.value;
    this.userService.saveUser(this.user).subscribe(
      (data)=>{
        console.log(data);
        alert("User added");
        this.router.navigate(['homepage']);
      },
      error=>{
        console.log(error);
      }
    )
    
  }
}

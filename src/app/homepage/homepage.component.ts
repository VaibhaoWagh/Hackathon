import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamServiceService } from '../exam-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  rid:any;
  userid:any;
  loggedin=false;
  
  constructor(private router:Router,private service:ExamServiceService) { }

  ngOnInit(): void {

    console.log(sessionStorage.length);
    console.log("Inside home page init");
    console.log(sessionStorage.getItem('userid'));
    
    if(sessionStorage.getItem('userid') != null)
    {
      this.loggedin = true;
    }
  }

  selectExam()
  {
    this.router.navigate(['selectexam']);
  }
  viewReport()
  {
    //this.rid = prompt("Enter RID ");
    this.userid = sessionStorage.getItem('userid');
    console.log(this.userid);
    if(this.userid ==null)
    {
      this.router.navigate(['homepage']);
    }
    else
    {
      this.router.navigate(['singlereport',this.userid]);
    }
  }
  registerUser()
  {
    this.router.navigate(['register']);
  }
  loginUser()
  {
    this.router.navigate(['login']);
  }
  logout()
  {
    this.service.logoutButton();
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Questions } from './questions';
import { Reportcard } from './reportcard';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class ExamServiceService {

  restUrl = "http://localhost:9098/rest/api";

  constructor(private myhttp:HttpClient,private router: Router) { }

  getTopics()
  {
    return this.myhttp.get(this.restUrl +"/getTopic");
  }
  getQuestions(tid:string)
  {
    return this.myhttp.get(this.restUrl +"/getQuestions/"+tid);
  }


  saveUser(user:Users)
  {
    return this.myhttp.post(this.restUrl +"/users",user);
  }

  loginstudent(uniqid:string)
  {
    return this.myhttp.get(this.restUrl+"/userslogin/"+uniqid);
  }

  logoutButton()
  { 
    sessionStorage.removeItem('userid');
    alert("Logging out");
    this.router.navigate(['homepage']);
  }

  getAlluestions(qs:Questions)
  {
    return this.myhttp.post(this.restUrl+"/addsinglequestion",qs);
  }

  getAllCities()
  {
    return this.myhttp.get(this.restUrl +"/getAllCities");
  }

  searchStudent(city:string,tname:string)
  {
    return this.myhttp.get(this.restUrl +"/searchstudents/" +city +"/" +tname);
  }
  getReportCard(rid:any)
  {
    return this.myhttp.get(this.restUrl +"/reportcard/" +rid);
  }
  postReportCard(report:Reportcard)
  {
    return this.myhttp.post(this.restUrl +"/reportcard",report);
  }

  getSingleReportcard(userid:any)
  {
    return this.myhttp.get(this.restUrl +"/singlereportcard/" +userid);
  }
}

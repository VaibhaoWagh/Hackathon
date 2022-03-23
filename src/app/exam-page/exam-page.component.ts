import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamServiceService } from '../exam-service.service';
import { Questions } from '../questions';
import { Reportcard } from '../reportcard';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {

  tid:any;
  questions:any;

  qArray = new Array<Questions>();
  q:Questions;
  selected_option:any;
  counter = 1;
  b = false;
  marks = 0;
  passingmarks:any ;
  remarks = "Fail";
  rid:any;
  report:Reportcard;

  constructor(private actRouter:ActivatedRoute,private service:ExamServiceService,private router:Router) {
    this.q = new Questions();
    this.report = new Reportcard();
   }

  ngOnInit(): void {
    this.tid = this.actRouter.snapshot.paramMap.get('tid');
    console.log(this.tid);

    this.service.getQuestions(this.tid).subscribe(
      (data)=>{
        this.questions = data;
        this.qArray = this.questions;
        this.passingmarks = this.qArray.length;
        console.log(this.qArray);
        this.q = this.qArray[0];
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  

  nextQuestion()
  {
    console.log("Selected option " +this.selected_option);
    console.log("Correct option " +this.q.correct_Ans);

    if(this.selected_option == this.q.correct_Ans)
    {
      this.marks++;
    }

    if(this.counter < this.qArray.length)
    { 
       this.q = this.qArray[this.counter];
       this.counter++;
   }
    else
    {
      console.log("End");
      this.b = true;
    }
  }
  submitButton()
  {
    alert("Test Submitted");
    alert("You have scored " +this.marks + " out of " +this.passingmarks);
    if(this.marks > this.passingmarks/2)
    {
      //alert("You've passed the test with " +this.marks +" and the passing marks where " +this.passingmarks/2);
      this.remarks = "Pass";
    }
    else
    {
      alert("You've failed the test");
    }
    this.rid = prompt("Enter your report card unique id");

    this.report.rid = this.rid;
    this.report.userid = sessionStorage.getItem('userid');
    this.report.tid = this.q.tid;
    this.report.marks = this.marks;
    this.report.remarks = this.remarks;

    this.service.postReportCard(this.report).subscribe(
      (data)=>{
        console.log(data);
        console.log("Data added");
      },
      (error)=>{
        console.log(error);
      }
    )
      this.router.navigate(['reportcard',this.rid]);
  }

  logout()
  {
    this.service.logoutButton();
  }
}

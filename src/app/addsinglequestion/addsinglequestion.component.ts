import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamServiceService } from '../exam-service.service';
import { Questions } from '../questions';

@Component({
  selector: 'app-addsinglequestion',
  templateUrl: './addsinglequestion.component.html',
  styleUrls: ['./addsinglequestion.component.css']
})
export class AddsinglequestionComponent implements OnInit {

  q:Questions;

  constructor(private qs:ExamServiceService,private router:Router) { 
    this.q = new Questions();
  }

  ngOnInit(): void {
  }

  saveQuestion(userForm:any)
  {
    this.q = userForm.value;
    console.log(this.q);
    this.qs.getAlluestions(this.q).subscribe(
      (data)=>{
        console.log(data);
        alert("Question Added");
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  back()
  {
    this.router.navigate(['adminpage']);
  }

}

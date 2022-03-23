import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { ExamServiceService } from '../exam-service.service';
import { Topic } from '../topic';

@Component({
  selector: 'app-select-exam',
  templateUrl: './select-exam.component.html',
  styleUrls: ['./select-exam.component.css']
})
export class SelectExamComponent implements OnInit {

  topics:any;

  constructor(private exameService:ExamServiceService,private router:Router) { 
    
  }

  ngOnInit(): void {

    this.exameService.getTopics().subscribe(
      (data)=>{
        console.log(data);
        this.topics = data;
        console.log(this.topics)
      },
      (error)=>{
        console.log(error);
      }
    )
  }
    selBtnClicked(tid:string)
    {
      this.router.navigate(['exampage',tid]);
      console.log(tid);
    }

}

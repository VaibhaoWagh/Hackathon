import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamServiceService } from '../exam-service.service';

@Component({
  selector: 'app-searchstudents',
  templateUrl: './searchstudents.component.html',
  styleUrls: ['./searchstudents.component.css']
})
export class SearchstudentsComponent implements OnInit {

  topics:any;
  cities:any;
  users:any;

  selectedtopic:any;
  selectedcity:any;

  constructor(private router:Router,private service:ExamServiceService) { 
  }

  ngOnInit(): void {
    this.service.getTopics().subscribe(
      (data)=>{
        this.topics = data;
        console.log(this.topics)
      },
      (error)=>{
        console.log(error);
      }
    )

    this.service.getAllCities().subscribe(
      (data)=>{
        this.cities = data;
        console.log(this.cities)
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

  searchstudent()
  {
    console.log(this.selectedcity)
    if(this.selectedcity == null || this.selectedtopic == null)
    {
      alert("select city and topic");
    } 
    else
    {
      this.service.searchStudent(this.selectedcity,this.selectedtopic).subscribe(
        (data)=>{
          console.log(data);
          this.users = data;
          console.log("Inside search student")
          console.log(this.users)
        },
        (error)=>{
          console.log(error);
        }

      )
    }
  }
}

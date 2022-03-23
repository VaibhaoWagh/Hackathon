import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamServiceService } from '../exam-service.service';
import { Reportcard } from '../reportcard';

@Component({
  selector: 'app-reportcard',
  templateUrl: './reportcard.component.html',
  styleUrls: ['./reportcard.component.css']
})
export class ReportcardComponent implements OnInit {

  rid:any;
  userid:any;
  reportrid:any;
  reportuserid:any;

  constructor(private actRouter:ActivatedRoute, private service:ExamServiceService) {
   }

  ngOnInit(): void { // To load initizlization outside of constructor
    this.rid = this.actRouter.snapshot.paramMap.get('rid');
    console.log(this.rid);

    this.service.getReportCard(this.rid).subscribe(
      (data)=>{
        console.log("Console.log(data) rid = " +data);
        this.reportrid = data;
        console.log("Console.log(this.report) rid" +this.reportrid);
        for(let d of this.reportrid)
        {
          console.log("Inside rid");
          console.log(d);
        }
      },
      (error)=>{
        console.log(error);
      }
    )

    this.userid = this.actRouter.snapshot.paramMap.get('userid');
    console.log("ths.userid inside report card " +this.userid);

    this.service.getSingleReportcard(this.userid).subscribe(
      (data)=>{
        console.log("Console.log(data) userid = "+data);
        this.reportuserid = data;
        //console.log(this.report);
        for(let d of this.reportuserid)
        {
          console.log("Inside userid");
          console.log(d);
        }
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}

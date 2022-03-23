import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addcsvQuestion()
  {
    this.router.navigate(['addcsvquestion']);
  }

  addsinglequestion()
  {
    this.router.navigate(['addsinglequestion']);
  }

  removesinglequestion()
  {
    this.router.navigate(['removesinglequestion']);
  }
  searchstudents()
  {
    this.router.navigate(['searchstudents']);
  }
}

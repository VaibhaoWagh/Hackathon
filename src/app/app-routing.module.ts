import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcsvquestionsComponent } from './addcsvquestions/addcsvquestions.component';
import { AddsinglequestionComponent } from './addsinglequestion/addsinglequestion.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RemovesinglequestionComponent } from './removesinglequestion/removesinglequestion.component';
import { ReportcardComponent } from './reportcard/reportcard.component';
import { SearchstudentsComponent } from './searchstudents/searchstudents.component';
import { SelectExamComponent } from './select-exam/select-exam.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},    // Component to be loaded
  {path:'homepage',component:HomepageComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'selectexam',component:SelectExamComponent},
  {path:'exampage/:tid',component:ExamPageComponent},
  {path:'adminpage',component:AdminpageComponent},
  {path:'addcsvquestion',component:AddcsvquestionsComponent},
  {path:'addsinglequestion',component:AddsinglequestionComponent},
  {path:'removesinglequestion',component:RemovesinglequestionComponent},
  {path:'searchstudents',component:SearchstudentsComponent},
  {path:'reportcard/:rid',component:ReportcardComponent},
  {path:'**',component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectExamComponent } from './select-exam/select-exam.component';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './homepage/homepage.component';
import { ReportcardComponent } from './reportcard/reportcard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { AddcsvquestionsComponent } from './addcsvquestions/addcsvquestions.component';
import { AddsinglequestionComponent } from './addsinglequestion/addsinglequestion.component';
import { RemovesinglequestionComponent } from './removesinglequestion/removesinglequestion.component';
import { SearchstudentsComponent } from './searchstudents/searchstudents.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';;
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AboutUsComponent } from './about-us/about-us.component';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { NgxUiLoaderHttpModule } from "ngx-ui-loader";

@NgModule({
  declarations: [
    AppComponent,
    SelectExamComponent,
    ExamPageComponent,
    HomepageComponent,
    ReportcardComponent,
    RegisterComponent,
    LoginComponent,
    AdminpageComponent,
    AddcsvquestionsComponent,
    AddsinglequestionComponent,
    RemovesinglequestionComponent,
    SearchstudentsComponent,
    ForgotpasswordComponent,
    AboutUsComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatRadioModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatTableModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({showForeground:true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

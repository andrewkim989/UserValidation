import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = "User-Validation";

  user: any;
  submitted: boolean = false;

  ngOnInit() {
    this.user = {firstname: "", lastname: "", email: "", password: "", confirmpassword: "", state: ""};
  }

  submitForm() {
    this.submitted = true;
  }

  goBack() {
    this.submitted = false;
    this.user = {firstname: "", lastname: "", email: "", password: "", confirmpassword: "", state: ""};
  }
}

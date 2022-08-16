import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project-1';
  loginFormGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder, private auth: Auth, private authService: AuthService) {}
  ngOnInit(): void{
    this.initLoginFormGroup();
  }
  initLoginFormGroup(): void{
    this.loginFormGroup = this.formBuilder.group({
      email: [''],
      password:['']
    })
  }
  onSignIn(): void{
    const request = this.loginFormGroup.value;
    this.authService.login(request.email, request.password).then((res) => {
      console.log(res.user);
    });
  }
  onSignUp(): void{
    const request = this.loginFormGroup.value;
    this.authService.registration(request.email, request.password).then((res) => {
      console.log(res.user);
    });
  }
}

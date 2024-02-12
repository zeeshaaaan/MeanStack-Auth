import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent implements OnInit {

  fb = inject(FormBuilder);
  authService = inject(AuthService)
  router = inject(Router)
  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })
  }

  login() {
    console.log("Login Values", this.loginForm.value);
    this.authService.loginService(this.loginForm.value).subscribe({
      next:(res)=>{
        alert("Logged in successfully!!")
        localStorage.setItem("user_Id",res.data._id)
        this.authService.isLoggedIn$.next(true)
        this.loginForm.reset();
        this.router.navigate(['home'])
      },
      error:(err)=>{
        alert(err.error)
      }
    })
  }

}

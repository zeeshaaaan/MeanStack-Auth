import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export default class ForgetPasswordComponent implements OnInit {

  fb = inject(FormBuilder);
  forgetPasswordForm !:FormGroup;
  authService = inject(AuthService)

  ngOnInit(): void {
    this.forgetPasswordForm=this.fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])]
    })
  }

  sendMail(){
    //console.log(this.forgetPasswordForm.value);
    this.authService.sendEmailService(this.forgetPasswordForm.value.email)
    .subscribe({
      next:(res)=>{
        alert(res.message);
        this.forgetPasswordForm.reset();
      },
      error:(err)=>{
        alert(err.error.message)
      }
    })
    
  }

  cancel(){

  }
}

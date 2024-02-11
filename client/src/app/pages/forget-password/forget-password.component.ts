import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

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

  ngOnInit(): void {
    this.forgetPasswordForm=this.fb.group({
      email:['',Validators.compose([Validators.required,Validators.email])]
    })
  }

  sendMail(){
    console.log(this.forgetPasswordForm.value);
    
  }

  cancel(){

  }
}

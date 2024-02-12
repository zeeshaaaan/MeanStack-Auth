import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { confirmpasswordValidator } from '../../validators/confirm-password-validator';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './reset.component.html',
  styleUrl: './reset.component.scss'
})
export default class ResetComponent implements OnInit {

  fb = inject(FormBuilder)
  resetForm!:FormGroup;
  router= inject(Router);
  activatedRoute = inject(ActivatedRoute)
  token!:string

  ngOnInit(): void {
    this.resetForm=this.fb.group({
      password:['',Validators.required],
      confirmPassword:['',Validators.required]
    },
    {
      validator: confirmpasswordValidator('password','confirmPassword')
    }
    );

    this.activatedRoute.params.subscribe(val=>{
      this.token= val['token'];
      console.log("TOKKEN:::",this.token);
    })
  }

  reset(){
      console.log("RESET::",this.resetForm.value);
  }

}

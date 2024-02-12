import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  authservice=inject(AuthService)
  isLoggedIn:boolean=this.authservice.isLoggedIn();
  router = inject(Router)

  ngOnInit(): void {
    this.authservice.isLoggedIn$.subscribe(res=>{
      this.isLoggedIn=this.authservice.isLoggedIn()
    })
  }

  logOut(){
    localStorage.removeItem("user_Id")
    this.router.navigate(['login'])
    this.authservice.isLoggedIn$.next(false)
  }
}

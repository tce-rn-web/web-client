import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public form: FormGroup;
  
  public constructor(private fb: FormBuilder,
    private authService: AuthService, 
    private router: Router)
  {
    this.form = this.fb.group({
      email: ['',Validators.required],
      password: ['',Validators.required]
    });
  }

  public login(): void {
    const val = this.form.value;

    if(val.email && val.password) {
      var user: User = new User(val.email, val.password);

      this.authService.login(user).subscribe(
        () => {
          console.log("User is logged in!");
          this.router.navigateByUrl('/');
        }
      );
    }
  }
}

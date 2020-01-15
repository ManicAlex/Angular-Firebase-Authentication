import { Component, OnInit  } from '@angular/core';
import { AuthService        } from "../../shared/services/auth.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector:         'app-sign-up',
  templateUrl:      './sign-up.component.html',
  styleUrls: [      './sign-up.component.scss']
})

export class SignUpComponent implements OnInit {

  registerForm: FormGroup;
  errorMessage: string = '';
  
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() { }

}
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from 'src/app/shared/services/account.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
      private formBuilder: FormBuilder,
      private accountService: AccountService
  ) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          fullName: ['', Validators.required],
          idNumber: ['', Validators.required],
          telephoneNumber: ['', Validators.required]
      });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.accountService.register(this.registerForm.value)
          .pipe(first())
          .subscribe(
              data => {
                this.registerForm.reset; 
                Swal.fire({
                    icon: 'success',
                    title: 'Account registered successfully ',
                    showConfirmButton: false,
                    timer: 3000
                  }) 
              },
              error => {
                this.registerForm.reset;  
                  this.error = error;
                  this.loading = false;
                  Swal.fire({
                    icon: 'error',
                    title: 'Error...',
                    text: 'Something went wrong!',
                    footer: '<p please contact your admin</p>'
                  })
              });
  }
}
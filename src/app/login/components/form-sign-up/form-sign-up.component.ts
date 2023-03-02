import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.scss'],
})
export class FormSignUpComponent implements OnInit {
  @Output() submitted: EventEmitter<any>;
  public form!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmedPassword: ['', Validators.required],
    });
  }

  public register(): void {
    if (
      this.form.controls['password'].value ===
      this.form.controls['confirmedPassword'].value
    ) {
      this.submitted.emit(this.form.value);
    }
  }
}

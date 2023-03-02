import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateUser } from 'src/app/core/enums/state-user';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss'],
})
export class FormUserComponent implements OnInit {
  @Output() submitted: EventEmitter<User>;
  @Input() init!: User;
  @Input() edit!: boolean;
  public form!: FormGroup;
  private valid!: boolean;
  public states: string[];
  public errorMsg: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter<User>();
    this.states = Object.values(StateUser);
    this.errorMsg = false;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [this.init.id],
      email: [this.init.email, Validators.required],
      grants: [this.init.grants, Validators.required],
      firstName: [this.init.firstName, Validators.required],
      lastName: [this.init.lastName, Validators.required],
      password: ['', Validators.required],
    });
  }

  public register(): void {
    if (this.edit) {
      this.form.removeControl('password');
      // console.log(this.form.value);
    }
    this.valid = true;

    for (const field in this.form.controls) {
      const control = this.form.get(field);
      // console.log(control?.valid);
      if (control?.invalid) {
        this.errorMsg = true;
        this.valid = false;
      }
    }
    if (this.valid) {
      this.submitted.emit(this.form.value);
    }
  }
}

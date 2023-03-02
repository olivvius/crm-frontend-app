import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';

@Component({
  selector: 'app-form-client',
  templateUrl: './form-client.component.html',
  styleUrls: ['./form-client.component.scss'],
})
export class FormClientComponent implements OnInit {
  @Input() public init!: Client;
  @Output() public submitted!: EventEmitter<Client>;
  public form!: FormGroup;
  public states: string[];

  constructor(private formBuilder: FormBuilder) {
    this.submitted = new EventEmitter<Client>();
    this.states = Object.values(StateClient);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.init.name],
      tva: [this.init.tva],
      totalCaHt: [this.init.totalCaHt],
      state: [this.init.state],
      comment: [this.init.comment],
      id: [this.init.id],
    });
  }

  public onSubmit() {
    console.log(this.form.value);
    this.submitted.emit(this.form.value);
  }
}

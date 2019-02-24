import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    public account:AccountService,
    private titleService:Title
  ) { 
    titleService.setTitle('Profile');
  }

  ngOnInit() {
    const { firstName, lastName} = this.account.account
    const validator = [Validators.minLength(3),Validators.required]
    this.form = this.fb.group({
      firstName: [firstName, validator],
      lastName: [lastName, [...validator, Validators.maxLength(11)]]
    });
  }

  onSubmit(form:FormGroup){
    console.log(form.invalid);
    if(!form.invalid){
      const {firstName, lastName} = form.value;
      console.log(firstName, lastName);
      const account = new Account(firstName,lastName);
      this.account.account = account;
    }
    else{
      alert('Form is invalid.');
      return;
    }
  }

}

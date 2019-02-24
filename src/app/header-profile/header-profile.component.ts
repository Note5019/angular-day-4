import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';

@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.scss']
})
export class HeaderProfileComponent implements OnInit {
  // @Input() account:Account; //Old version;
  
  constructor(
    public accountService :AccountService
    ) {
      console.log(this.accountService.account);
      
     }

  ngOnInit() {
  }

}

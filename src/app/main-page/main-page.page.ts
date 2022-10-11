import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {
  md_user: string = '';
  md_pass: string = '';
  user: string='';
  pass: string='';

  constructor(private db:DbService) { }

ngOnInit() {
}

login() {
  this.user=this.md_user;
  this.pass=this.md_pass;
  this.md_user ="";
  this.md_pass="";
  if(!this.db.validateCredentials(this.user, this.pass )) {
    
  }
}
}


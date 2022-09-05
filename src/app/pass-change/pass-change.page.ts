import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-pass-change',
  templateUrl: './pass-change.page.html',
  styleUrls: ['./pass-change.page.scss'],
})
export class PassChangePage implements OnInit {

  md_nPass: string = '';
  md_user: string = '';
  changeValidator: boolean;

  constructor(private dbService:DbService) { }

  ngOnInit() {
  }

  userV(){
  this.dbService.userValidation(this.md_user,this.md_nPass)
  }

  /*changePass(){
    (this.dbService.change(this.md_nPass))
  } */
  
}

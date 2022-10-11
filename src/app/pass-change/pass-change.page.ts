import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-pass-change',
  templateUrl: './pass-change.page.html',
  styleUrls: ['./pass-change.page.scss'],
})
export class PassChangePage implements OnInit {

  md_correo: string = '';
  md_nPass1: string = '';
  md_nPass2: string ='';
  changeValidator: boolean;

  constructor(private dbService:DbService) { }

  ngOnInit() {
  }

  userV(){
  this.dbService.userValidation(this.md_correo,this.md_nPass1,this.md_nPass2)
  }

  /*changePass(){
    (this.dbService.change(this.md_nPass))
  } */
  
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

var auser = ['admin'];
var apass = ['admin'];

@Injectable({
  providedIn: 'root'
})
export class DbService {
  validator: boolean;
  changeValidator: boolean;
  fuser : string = '';

  constructor(private router:Router,
              private toastController:ToastController) { }
  
  
  userValidation(user,newPass) {
    if(user == auser){
      console.log('usuario = ', user ,'encontrado')
      console.log('cambiando contraseña')
      apass.pop()
      console.log(apass,'contraseña vacia')
      apass.push(newPass)
      console.log('contraseña guardada')
      this.showToast('contraseña cambiada !')
    }else{
      console.log('usuario = ', user,' no encontrado')
      console.log(' contraseña se mantendra')
      this.showToast('Usuario no encontrado, contraseña mantenida')
    }
  }             

  /*change(newPass) {
    this.changeValidator == true
    if(this.changeValidator = true) {
    console.log('cambiando contraseña')
    console.log('contraseña actual= ',apass)
    apass.pop()
    console.log(apass)
    console.log('contraseña vacia')
    apass.push(newPass)
    console.log(apass)
    console.log('contraseña guardada')}
    this.showToast('Contraseña cambiada !')
    return true;
  } */

  validateCredentials(user, pass) {
    console.log(apass)
    if(user == auser[0] && pass == apass[0]) {
    this.validator = true;
    this.router.navigate(['authentia']);
    console.log('redireccionado correctamente')
    return true;
  }else{
    console.log('no se ha redireccionado')
    console.log('ingresar credenciales existentes\ncredenciales correctas')
    this.showToast('credenciales invalidas');
    return false;
  }
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 10000
    });
    toast.present();
  }
 
  canActivate(){
    if(this.validator) {
      return true;
    }else{
      this.router.navigate(['main-paige']);
      return false;
    }
    }

}
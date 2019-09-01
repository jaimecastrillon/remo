import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

import { FeatherModule } from 'angular-feather';
import { User, Key, Lock, LogIn, LogOut, Save, Trash2 } from 'angular-feather/icons';


const icons = {
  User,
  Key,
  Lock,
  LogIn,
  LogOut,
  Save,
  Trash2,
};

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}

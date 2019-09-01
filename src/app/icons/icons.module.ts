import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import { Heart, Key, Lock, LogIn, LogOut, Save, Trash2 } from 'angular-feather/icons';


const icons = {
  Heart,
  Key,
  Lock,
  LogIn,
  LogOut,
  Save,
  Trash2,
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }

import { Angulartics2Module } from 'angulartics2';
import { CommonModule } from '@angular/common';
import { CovalentMenuModule } from '@covalent/core';
import { NgModule } from '@angular/core';
import { MdButtonModule, MdIconModule, MdListModule, MdMenuModule, MdTooltipModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { LanguageMenuComponent } from './language-menu/language-menu.component';

@NgModule({
  imports: [
    Angulartics2Module,
    CommonModule,
    CovalentMenuModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MdMenuModule,
    MdTooltipModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent,
    LanguageMenuComponent
  ]
})
export class HeaderModule { }

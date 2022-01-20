import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatTreeModule } from '@angular/material/tree';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
@NgModule({
  declarations: [
    MainNavComponent,
    MenuComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatTreeModule,
    RouterModule,
    MatCardModule
  ],
  exports: [
    MainNavComponent,
    CardsComponent
  ]
})
export class SharedModule { }

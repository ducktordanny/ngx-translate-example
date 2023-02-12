import {Component} from "@angular/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {LanguageComponent} from "./language.component";
import {TranslateModule} from "@ngx-translate/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-layout',
  template: `
    <mat-toolbar color="primary">
      <span>ngx-translate example</span>
      <div class="space"></div>
      <a
        mat-flat-button
        routerLink="/template"
        routerLinkActive="active-router-link"
      >
        Template
      </a>
      <a
        mat-flat-button
        routerLink="/service"
        routerLinkActive="active-router-link"
      >
        Service
      </a>
      <a
        mat-flat-button
        routerLink="/props"
        routerLinkActive="active-router-link"
      >
        Props
      </a>
      <app-language></app-language>
    </mat-toolbar>
    <section>
      <ng-content></ng-content>
    </section>


  `,
  styles: [`
    a {
      margin-left: 8px;
      &.active-router-link {
        background: #3f51b5;
        color: #fff;
        border: 1px solid #fff;
      }
    }
    app-language {
      margin-left: 8px;
    }
    section {
      padding: 8px;
    }
    .space {
      flex: 1;
    }
  `],
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatToolbarModule, RouterLink, RouterLinkActive, LanguageComponent],
})
export class LayoutComponent {}

import {Component} from "@angular/core";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-language',
  template: `
    <button mat-icon-button [matMenuTriggerFor]="langMenu">
      <mat-icon class="mat-18">language</mat-icon>
    </button>
    <mat-menu #langMenu="matMenu">
      <button
        mat-menu-item
        *ngFor="let lang of languages"
        (click)="onLanguageChange(lang)"
      >
        {{ 'LANGUAGES.' + lang | uppercase | translate }}
      </button>
    </mat-menu>
  `,
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatMenuModule, TranslateModule, CommonModule],
})
export class LanguageComponent {
  public readonly languages = ['en', 'hu', 'ge'];
  constructor(private translateService: TranslateService) {}

  public onLanguageChange(lang: string): void {
    this.translateService.use(lang);
  }
}
